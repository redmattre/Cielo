#!/usr/bin/env python3
"""
Nuvola Dashboard Relay Server
Receives UDP broadcasts from Raspberry Pi devices and serves them via HTTP
Run this on your Mac to view the dashboard
"""

import socket
import json
import time
from http.server import HTTPServer, SimpleHTTPRequestHandler
import threading
from datetime import datetime

# Configuration
UDP_PORT = 9998
HTTP_PORT = 9999
DEVICE_TIMEOUT = 8  # seconds - mark device as offline after this time

devices = {}

class DashboardHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/status':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            # Mark devices as offline if no data received for DEVICE_TIMEOUT seconds
            now = time.time()
            for hostname in devices:
                if (now - devices[hostname].get('lastSeen', now)) > DEVICE_TIMEOUT:
                    devices[hostname]['status'] = 'offline'
            
            # Return devices as array
            device_list = list(devices.values())
            response = {"devices": device_list}
            self.wfile.write(json.dumps(response).encode('utf-8'))
        else:
            # Serve static files (dashboard.html)
            super().do_GET()
    
    def log_message(self, format, *args):
        # Suppress HTTP logs
        pass

def udp_listener():
    """Listen for UDP broadcasts from Raspberry Pi devices"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(('', UDP_PORT))
    
    print(f"[UDP] Listening for device broadcasts on port {UDP_PORT}...")
    
    while True:
        try:
            data, addr = sock.recvfrom(1024)
            device_info = json.loads(data.decode('utf-8'))
            hostname = device_info['hostname']
            
            device_info['lastSeen'] = time.time()  # Add server-side timestamp
            devices[hostname] = device_info
            
            status_symbol = {
                'online': '✅',
                'booting': '⏳',
                'stopped': '⏹️',
                'offline': '⚫',
                'unknown': '❓'
            }.get(device_info['status'], '❓')
            
            print(f"[{datetime.now().strftime('%H:%M:%S')}] {status_symbol} {hostname}: "
                  f"{device_info['status']} | {device_info['temperature']}")
            
        except Exception as e:
            print(f"[ERROR] {e}")

def start_http_server():
    """Start HTTP server for dashboard"""
    server = HTTPServer(('', HTTP_PORT), DashboardHandler)
    print(f"[HTTP] Dashboard server running on \x1b]8;;http://localhost:{HTTP_PORT}/nuvola_dashboard.html\x1b\\http://localhost:{HTTP_PORT}/nuvola_dashboard.html\x1b]8;;\x1b\\")
    print(f"[HTTP] Click the link above or copy to your browser")
    server.serve_forever()

if __name__ == "__main__":
    print("=" * 60)
    print("🎧 NUVOLA DASHBOARD RELAY SERVER")
    print("=" * 60)
    
    # Start UDP listener in separate thread
    udp_thread = threading.Thread(target=udp_listener, daemon=True)
    udp_thread.start()
    
    # Give UDP listener time to start
    time.sleep(1)
    
    # Start HTTP server (blocks)
    try:
        start_http_server()
    except KeyboardInterrupt:
        print("\n[STOP] Shutting down...")
