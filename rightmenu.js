// Right Menu Management System
// Sistema di gestione del menu destro con controlli modulari

// Configuration for right panel sections and their controls
const panelConfigs = {
  generali: {
    title: 'Generali',
    controls: [
      {
        type: 'toggle',
        id: 'theme',
        label: 'Tema Eco',
        defaultValue: false,
        action: (value) => {
          console.log('Theme changed:', value);
          // Mantiene il collegamento esistente con UI.js
          document.querySelector('input[data-id="theme"]').checked = value;
          document.querySelector('input[data-id="theme"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'toggle',
        id: 'gridSnapState',
        label: 'Aggancio Griglia',
        defaultValue: true,
        action: (value) => {
          console.log('Grid snap changed:', value);
          document.querySelector('input[data-id="gridSnapState"]').checked = value;
          document.querySelector('input[data-id="gridSnapState"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'slider',
        id: 'snapDefinition',
        label: 'Precisione Snap',
        min: 1,
        max: 3,
        defaultValue: 2,
        step: 1,
        action: (value) => {
          console.log('Snap definition changed:', value);
          document.querySelector('input[data-id="snapDefinition"]').value = value;
          document.querySelector('input[data-id="snapDefinition"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'toggle',
        id: 'lock',
        label: 'Diorama',
        defaultValue: false,
        action: (value) => {
          console.log('Lock changed:', value);
          document.querySelector('input[data-id="lock"]').checked = value;
          document.querySelector('input[data-id="lock"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'toggle',
        id: 'grid',
        label: 'Super Superficie',
        defaultValue: true,
        action: (value) => {
          console.log('Grid visibility changed:', value);
          document.querySelector('input[data-id="grid"]').checked = value;
          document.querySelector('input[data-id="grid"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'slider',
        id: 'gridsize',
        label: 'Dimensione Griglia',
        min: 1,
        max: 4,
        defaultValue: 2,
        step: 1,
        action: (value) => {
          console.log('Grid size changed:', value);
          document.querySelector('input[data-id="gridsize"]').value = value;
          document.querySelector('input[data-id="gridsize"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'toggle',
        id: 'multiClient',
        label: 'Sincronizzazione Multi-Client',
        defaultValue: false,
        action: (value) => {
          console.log('=== Multi-client action chiamato ===');
          console.log('Valore ricevuto:', value);
          console.log('window.multiClientManager esiste:', !!window.multiClientManager);
          
          if (window.multiClientManager) {
            console.log('Chiamando setEnabled con:', value);
            window.multiClientManager.setEnabled(value);
            // Aggiorna status display
            if (window.updateMultiClientStatusDisplay) {
              window.updateMultiClientStatusDisplay();
            }
          } else {
            console.error('window.multiClientManager non trovato!');
          }
        }
      },
      {
        type: 'status',
        id: 'multiClientStatus',
        defaultText: 'Status: Disattivato',
        hidden: true
      },
      {
        type: 'toggle',
        id: 'oscOutput',
        label: 'OSC Output',
        defaultValue: true, // OSC attivo di default
        action: (value) => {
          if (window.oscManager) {
            window.oscManager.setEnabled(value);
            if (window.updateOSCStatusDisplay) {
              window.updateOSCStatusDisplay();
            }
          }
        }
      },
      {
        type: 'input',
        id: 'oscHost',
        label: 'OSC IP',
        defaultValue: '192.168.0.255',
        action: (value) => {
          if (window.oscManager) {
            const port = window.oscManager.port;
            window.oscManager.updateConfig(value, port);
          }
        }
      },
      {
        type: 'input',
        id: 'oscPort',
        label: 'OSC Port',
        defaultValue: '5000',
        action: (value) => {
          if (window.oscManager) {
            const host = window.oscManager.host;
            const port = parseInt(value) || 5000;
            window.oscManager.updateConfig(host, port);
          }
        }
      },
      {
        type: 'status',
        id: 'oscStatus',
        defaultText: 'Status: Disattivato',
        hidden: true
      },
      {
        type: 'toggle',
        id: 'oscForceOutput',
        label: 'Force OSC Output (ignora ruolo Master)',
        defaultValue: false,
        action: (value) => {
          if (window.messageBroker) {
            window.messageBroker.setOSCForceOutput(value);
          }
        }
      },
      {
        type: 'button',
        id: 'saveProject',
        label: 'Save Project',
        action: () => {
          console.log('Saving project');
          document.getElementById('saveProjectBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'saveProjectAs',
        label: 'Save Project As',
        action: () => {
          console.log('Saving project as');
          document.getElementById('saveProjectAsBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'loadProject',
        label: 'Load Project',
        action: () => {
          console.log('Loading project');
          document.getElementById('loadProjectBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'loadSpeakersPreset',
        label: 'Load Speakers',
        action: () => {
          console.log('Loading speakers preset');
          document.getElementById('loadSpeakersPresetBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'saveSpeakersPreset',
        label: 'Save Speakers',
        action: () => {
          console.log('Saving speakers preset');
          document.getElementById('saveSpeakersPresetBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'loadSourcesPreset',
        label: 'Load Sources',
        action: () => {
          console.log('Loading sources preset');
          document.getElementById('loadSourcesPresetBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'saveSourcesPreset',
        label: 'Save Sources',
        action: () => {
          console.log('Saving sources preset');
          document.getElementById('saveSourcesPresetBtn')?.click();
        }
      },
      {
        type: 'button',
        id: 'resetScene',
        label: 'Empty',
        action: () => {
          console.log('Resetting scene');
          document.getElementById('resetSceneBtn')?.click();
        }
      }
    ]
  },
  plastico: {
    title: 'Plastico',
    controls: [
      {
        type: 'button',
        id: 'loadPlastico',
        label: 'Carica',
        action: () => {
          console.log('Loading plastico');
          document.getElementById('loadPlastico')?.click();
        }
      },
      {
        type: 'toggle',
        id: 'archVisibility',
        label: '⏿',
        defaultValue: true,
        action: (value) => {
          console.log('Arch visibility changed:', value);
          document.querySelector('input[data-id="archVisibility"]').checked = value;
          document.querySelector('input[data-id="archVisibility"]').dispatchEvent(new Event('change'));
        }
      },
      {
        type: 'slider',
        id: 'plasticoThreshold',
        label: 'Threshold',
        min: 0,
        max: 120,
        defaultValue: 60,
        step: 1,
        action: (value) => {
          console.log('Plastico threshold changed:', value);
          const slider = document.getElementById('plasticoThreshold');
          if (slider) {
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
          }
        }
      },
      {
        type: 'slider',
        id: 'plasticoThickness',
        label: 'Line Thickness',
        min: 0.5,
        max: 10,
        defaultValue: 2,
        step: 0.1,
        action: (value) => {
          console.log('Plastico thickness changed:', value);
          const slider = document.getElementById('plasticoThickness');
          if (slider) {
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
          }
        }
      },
      {
        type: 'slider',
        id: 'plasticoOpacity',
        label: 'Opacity',
        min: 0.1,
        max: 1.0,
        defaultValue: 0.8,
        step: 0.01,
        action: (value) => {
          console.log('Plastico opacity changed:', value);
          const slider = document.getElementById('plasticoOpacity');
          if (slider) {
            slider.value = value;
            slider.dispatchEvent(new Event('input'));
          }
        }
      }
    ]
  },
  carica: {
    title: 'Carica Modello',
    controls: [
      {
        type: 'button',
        id: 'loadGenericGltf',
        label: 'Carica',
        action: () => {
          console.log('Loading GLTF');
          document.getElementById('loadGenericGltf')?.click();
        }
      }
    ]
  },
  zone: {
    title: 'Zone',
    controls: [
      {
        type: 'toggle',
        id: 'zoneVisibility',
        label: '⏿',
        defaultValue: true,
        action: (value) => {
          console.log('Zone visibility changed:', value);
          document.querySelector('input[data-id="zoneVisibility"]').checked = value;
          document.querySelector('input[data-id="zoneVisibility"]').dispatchEvent(new Event('change'));
        }
      }
    ]
  },
  altoparlanti: {
    title: 'Altoparlanti',
    controls: [
      {
        type: 'toggle',
        id: 'speakersVisibility',
        label: '⏿',
        defaultValue: true,
        action: (value) => {
          console.log('Speakers visibility changed:', value);
          
          // Chiama la funzione globale per controllare la visibilità degli altoparlanti
          if (window.setGlobalSpeakerVisibility) {
            window.setGlobalSpeakerVisibility(value);
          }
          
          // Mantieni il comportamento esistente per compatibilità
          const elements = document.querySelectorAll('input[data-id="speakersVisibility"]');
          elements.forEach(el => {
            el.checked = value;
            el.dispatchEvent(new Event('change'));
          });
        }
      },
      {
        type: 'toggle',
        id: 'speakersGlobalLookAt',
        label: 'Guarda origine (globale)',
        defaultValue: true,
        action: (value) => {
          console.log('Global speaker look at changed:', value);
          // Chiama la funzione globale per controllare tutti gli altoparlanti
          if (window.setGlobalSpeakerLookAt) {
            window.setGlobalSpeakerLookAt(value);
          }
        }
      }
    ]
  },
  corone: {
    title: '',
    controls: [
      {
        type: 'custom',
        id: 'nuvola-dashboard',
        html: '<div id="nuvola-dashboard" class="nuvola-dashboard-container"></div>'
      }
    ]
  }
};

// Current active panel
let currentPanel = 'generali';

// Utility functions to create controls (same as left menu)
function createToggle(config) {
  const container = document.createElement('div');
  container.className = 'control-row';
  
  const label = document.createElement('label');
  label.textContent = config.label;
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = config.defaultValue || false;
  
  // Aggiungi listener per click invece di change
  checkbox.addEventListener('click', (e) => {
    console.log('Toggle clicked:', config.id, 'checked:', e.target.checked);
    config.action(e.target.checked);
  });
  
  container.appendChild(label);
  container.appendChild(checkbox);
  
  return container;
}

function createSlider(config) {
  const container = document.createElement('div');
  container.className = 'control-row';
  
  const label = document.createElement('label');
  label.textContent = config.label;
  
  const sliderContainer = document.createElement('div');
  sliderContainer.className = 'slider-container';
  
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = config.min;
  slider.max = config.max;
  slider.step = config.step || 1;
  slider.value = config.defaultValue || config.min;
  
  slider.addEventListener('input', (e) => {
    config.action(parseFloat(e.target.value));
  });
  
  sliderContainer.appendChild(slider);
  
  container.appendChild(label);
  container.appendChild(sliderContainer);
  
  return container;
}

function createButton(config) {
  const container = document.createElement('div');
  container.className = 'control-row';
  
  const button = document.createElement('button');
  button.className = 'control-button';
  button.textContent = config.label;
  button.addEventListener('click', config.action);
  
  container.appendChild(button);
  
  return container;
}

function createStatus(config) {
  const container = document.createElement('div');
  container.className = 'control-row status-row';
  
  const statusDiv = document.createElement('div');
  statusDiv.className = 'status-display';
  statusDiv.id = config.id;
  statusDiv.textContent = config.defaultText || 'Status';
  statusDiv.style.fontSize = '0.8em';
  statusDiv.style.color = '#888';
  statusDiv.style.padding = '4px 8px';
  statusDiv.style.backgroundColor = 'rgba(255,255,255,0.1)';
  statusDiv.style.borderRadius = '4px';
  statusDiv.style.display = config.hidden ? 'none' : 'block';
  
  container.appendChild(statusDiv);
  
  return container;
}

function createInput(config) {
  const container = document.createElement('div');
  container.className = 'control-row';
  
  const label = document.createElement('label');
  label.textContent = config.label;
  
  const input = document.createElement('input');
  input.type = 'text';
  input.id = config.id;
  input.value = config.defaultValue || '';
  input.style.flex = '1';
  input.style.padding = '4px 8px';
  input.style.backgroundColor = 'rgba(255,255,255,0.1)';
  input.style.border = '1px solid var(--dettaglio)';
  input.style.borderRadius = '4px';
  input.style.color = 'var(--testo)';
  input.style.width = '70%';
  input.style.textAlign = 'right';
  
  input.addEventListener('change', (e) => {
    config.action(e.target.value);
  });
  
  container.appendChild(label);
  container.appendChild(input);
  
  return container;
}

function createNumbox(config) {
  const container = document.createElement('div');
  container.className = 'control-row';
  
  const label = document.createElement('label');
  label.textContent = config.label;
  
  const input = document.createElement('input');
  input.type = 'number';
  input.min = config.min;
  input.max = config.max;
  input.step = config.step || 1;
  input.value = config.defaultValue || config.min;
  
  input.addEventListener('change', (e) => {
    config.action(parseFloat(e.target.value));
  });
  
  container.appendChild(label);
  container.appendChild(input);
  
  return container;
}

// Create panel content
function createPanelContent(panelId) {
  const config = panelConfigs[panelId];
  if (!config) return null;
  
  const container = document.createElement('div');
  container.className = 'new-panel-content';
  container.id = `new-panel-${panelId}`;
  
  const title = document.createElement('h3');
  title.className = 'panel-title';
  title.textContent = config.title;
  container.appendChild(title);
  
    config.controls.forEach(controlConfig => {
    let control;
    switch (controlConfig.type) {
      case 'toggle':
        control = createToggle(controlConfig);
        break;
      case 'slider':
        control = createSlider(controlConfig);
        break;
      case 'button':
        control = createButton(controlConfig);
        break;
      case 'numbox':
        control = createNumbox(controlConfig);
        break;
      case 'status':
        control = createStatus(controlConfig);
        break;
      case 'input':
        control = createInput(controlConfig);
        break;
      case 'custom':
        // Per contenuto HTML custom (dashboard Nuvola)
        const customDiv = document.createElement('div');
        customDiv.innerHTML = controlConfig.html;
        control = customDiv.firstChild;
        break;
      default:
        console.warn('Unknown control type:', controlConfig.type);
        return;
    }    if (control) {
      container.appendChild(control);
    }
  });
  
  return container;
}

// Create tab system similar to left menu
function createRightMenuTabs() {
  const tabContainer = document.createElement('div');
  tabContainer.className = 'right-menu-tabs';
  
  Object.keys(panelConfigs).forEach((panelId) => {
    const tab = document.createElement('button');
    tab.className = 'right-menu-tab';
    tab.textContent = getTabLabel(panelId);
    tab.dataset.panel = panelId;
    
    if (panelId === 'generali') {
      tab.classList.add('right-tab-active');
    }
    
    tab.addEventListener('click', () => {
      switchToRightPanel(panelId);
      // Update active state
      tabContainer.querySelectorAll('.right-menu-tab').forEach(t => t.classList.remove('right-tab-active'));
      tab.classList.add('right-tab-active');
    });
    
    tabContainer.appendChild(tab);
  });
  
  return tabContainer;
}

function getTabLabel(panelId) {
  const labels = {
    generali: 'G',
    plastico: 'P',
    carica: 'C',
    zone: 'Z',
    altoparlanti: 'A',
    corone: '❍'
  };
  return labels[panelId] || panelId.charAt(0).toUpperCase();
}

function switchToRightPanel(panelId) {
  currentPanel = panelId;
  
  // Use the existing tab system functionality to switch panels
  const existingTabs = document.querySelectorAll('.panel-tab');
  const existingPanels = document.querySelectorAll('.panel-content');
  
  // Update existing tabs
  existingTabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.getAttribute('data-panel') === panelId) {
      tab.classList.add('active');
    }
  });
  
  // Update existing panels
  existingPanels.forEach(panel => {
    panel.style.display = 'none';
    if (panel.getAttribute('data-panel-content') === panelId) {
      panel.style.display = 'block';
    }
  });
}

function switchToPanel(panelId) {
  // Legacy function - redirect to new function
  switchToRightPanel(panelId);
}

// Initialize the new right menu system
function initializeRightMenu() {
  const blackPanel = document.getElementById('black-panel');
  if (!blackPanel) {
    console.warn('Black panel not found');
    return;
  }
  
  // Start with gradual migration - replace migrated panels
  const generaliContainer = document.getElementById('new-panel-generali-container');
  if (generaliContainer) {
    const generaliContent = createPanelContent('generali');
    if (generaliContent) {
      generaliContent.style.display = 'block';
      generaliContainer.appendChild(generaliContent);
      console.log('Generali panel migrated to new system');
    }
  }
  
  const plasticoContainer = document.getElementById('new-panel-plastico-container');
  if (plasticoContainer) {
    const plasticoContent = createPanelContent('plastico');
    if (plasticoContent) {
      plasticoContent.style.display = 'block';
      plasticoContainer.appendChild(plasticoContent);
      console.log('Plastico panel migrated to new system');
    }
  }
  
  // Migrate remaining panels
  const panelIds = ['carica', 'zone', 'altoparlanti', 'corone'];
  panelIds.forEach(panelId => {
    const container = document.getElementById(`new-panel-${panelId}-container`);
    if (container) {
      const content = createPanelContent(panelId);
      if (content) {
        content.style.display = 'block';
        container.appendChild(content);
        console.log(`${panelId} panel migrated to new system`);
      }
    }
  });
  
  // Insert new tab system
  const tabsContainer = document.getElementById('new-panel-tabs-container');
  if (tabsContainer) {
    const newTabs = createRightMenuTabs();
    tabsContainer.appendChild(newTabs);
    console.log('New tab system installed');
  }
  
  // Create all panel contents for future use (not used now, but kept for consistency)
  const newContainer = document.createElement('div');
  newContainer.className = 'new-panels-container';
  
  Object.keys(panelConfigs).forEach(panelId => {
    const panelContent = createPanelContent(panelId);
    if (panelContent && panelId !== 'generali') { // Generali is already placed
      if (panelId !== currentPanel) {
        panelContent.style.display = 'none';
      }
      newContainer.appendChild(panelContent);
    }
  });
  
  // Store references for gradual migration
  window.rightMenuSystem = {
    newContainer,
    switchToPanel: switchToRightPanel,
    panelConfigs,
    migratePanel: (panelId) => migratePanel(panelId)
  };
  
  console.log('Right menu system initialized - Generali panel active');
}

// Function to migrate individual panels gradually
function migratePanel(panelId) {
  const panelElement = document.querySelector(`[data-panel-content="${panelId}"]`);
  if (!panelElement) {
    console.warn(`Panel ${panelId} not found`);
    return;
  }
  
  // Create the new panel content
  const newContent = createPanelContent(panelId);
  if (!newContent) {
    console.warn(`Could not create content for panel ${panelId}`);
    return;
  }
  
  // Replace the existing content
  panelElement.innerHTML = '';
  panelElement.appendChild(newContent);
  newContent.style.display = 'block';
  
  console.log(`Panel ${panelId} migrated to new system`);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeRightMenu);

export { panelConfigs, createToggle, createSlider, createButton, createNumbox, switchToPanel };