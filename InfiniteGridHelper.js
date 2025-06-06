// GridHelperAA: griglia anti-alias, dimensionabile, nascondibile, shader-based
import * as THREE from 'three';

export class GridHelperAA extends THREE.Mesh {
    constructor(
        size = 10,
        divisions = 16,
        color1 = new THREE.Color(0xeeeeee),
        color2 = new THREE.Color(0xdddddd),
        opacity = 0.35
    ) {
        // La griglia sarà centrata e grande quanto size
        const geometry = new THREE.PlaneGeometry(size, size, 1, 1);
        const material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            transparent: true,
            uniforms: {
                u_size: { value: size },
                u_divisions: { value: divisions },
                u_color1: { value: color1 },
                u_color2: { value: color2 },
                u_opacity: { value: opacity }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec2 vUv;
                uniform float u_size;
                uniform float u_divisions;
                uniform vec3 u_color1;
                uniform vec3 u_color2;
                uniform float u_opacity;
                float gridLine(float coord, float divisions) {
                    float line = abs(fract(coord * divisions) - 0.5) / fwidth(coord * divisions);
                    return 1.0 - min(line, 1.0);
                }
                void main() {
                    float gX = gridLine(vUv.x, u_divisions);
                    float gY = gridLine(vUv.y, u_divisions);
                    float grid = max(gX, gY);
                    vec3 color = mix(u_color2, u_color1, grid);
                    float alpha = mix(0.0, u_opacity, grid);
                    if(alpha < 0.01) discard;
                    gl_FragColor = vec4(color, alpha);
                }
            `
        });
        super(geometry, material);
        this.frustumCulled = false;
        this.renderOrder = -1;
        this.position.y = 0;
        this.rotation.x = -Math.PI / 2;
    }
    setSize(size, divisions) {
        this.geometry.dispose();
        this.geometry = new THREE.PlaneGeometry(size, size, 1, 1);
        this.material.uniforms.u_size.value = size;
        this.material.uniforms.u_divisions.value = divisions;
    }
    setVisible(val) {
        this.visible = val;
    }
}
