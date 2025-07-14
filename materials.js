import * as THREE from 'three';
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';

export let normalMat = new THREE.MeshNormalMaterial({
	transparent: false,
	depthTest: true,
	wireframe: false,
	opacity: 0.8
});

export let standardMat = new THREE.MeshStandardMaterial({
	color: new THREE.Color(0xf25d00),
	transparent: true,
	depthTest: true,
	wireframe: false,
	opacity: 0.3
});

export let phongMat = new THREE.MeshPhongMaterial({
    color: new THREE.Color("orange"),
    shininess: 100,
    emissive: 0x000000,
    specular: 0x111111,
    transparent: false,
    wireframe: false,
    opacity: 0.5
});

export let dashedLineMat = new THREE.LineDashedMaterial({
    color: 'yellow',
    linewidth: 1,
    scale: 1,
    dashSize: 0.2,
    gapSize: 0.1
});

export let dashedMaterial = new LineMaterial({
    // color: 0xf0ed5d,
    // color: 0x343434,
    color: 0xDBD35F,
    linewidth: 0.025,
    dashed: true,
    dashSize: 0.07,
    gapSize: 0.04,
    worldUnits: true,
    alphaToCoverage: true, // Enable better transparency blending
});

export let dashedMaterialB = new LineMaterial({
    // color: 0xf0ed5d,
    // color: 0x343434,
    color: 0xC04F3D,
    linewidth: 0.025,
    dashed: true,
    dashSize: 0.07,
    gapSize: 0.04,
    worldUnits: true,
    alphaToCoverage: true, // Enable better transparency blending
});

export let dashedMaterialC = new LineMaterial({
    // color: 0xf0ed5d,
    // color: 0x343434,
    // color: 0x497DC4,
    color: 0x7c80d2,
    linewidth: 0.025,
    dashed: true,
    dashSize: 0.07,
    gapSize: 0.04,
    worldUnits: true,
    alphaToCoverage: true, // Enable better transparency blending
});

export let dashedMaterialD = new LineMaterial({
    // color: 0xf0ed5d,
    // color: 0x343434,
    color: 0x469793,
    linewidth: 0.025,
    dashed: true,
    dashSize: 0.07,
    gapSize: 0.04,
    worldUnits: true,
    alphaToCoverage: true, // Enable better transparency blending
});

export let solidMaterial = new LineMaterial({
    color: 'black', // Green
    linewidth: 0.012,
    worldUnits: true,
    alphaToCoverage: true, // Enable better transparency blending
    visible: false
});

export let goochMaterial = new THREE.ShaderMaterial({
    uniforms: {
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        // coolColor: { value: new THREE.Color(0x292520) }, // clay
        // warmColor: { value: new THREE.Color(0xffebcc) }, 
        // coolColor: { value: new THREE.Color(0x0077ff) }, // cool
        // warmColor: { value: new THREE.Color(0xffaa00) }, 
        coolColor: { value: new THREE.Color(0xADD8E6) }, // metal
        warmColor: { value: new THREE.Color(0xFF6F61) }, 
        surfaceColor: { value: new THREE.Color(0xffffff) }, // Colore base
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `,
});

export let goochMaterialAlpha = new THREE.ShaderMaterial({
    uniforms: {
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        coolColor: { value: new THREE.Color(0x0077ff) }, // Colore freddo
        warmColor: { value: new THREE.Color(0xffaa00) }, // Colore caldo
        // coolColor: { value: new THREE.Color(0x000080) }, // Colore freddo
        // warmColor: { value: new THREE.Color(0xF5F5DC) }, // Colore caldo
        surfaceColor: { value: new THREE.Color(0xffffff) }, // Colore base
        opacity: { value: 0. } // Aggiungi l'uniforme per l'opacità
    },
    transparent: true, // Abilita la trasparenza
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;
        uniform float opacity; // Uniforme per l'opacità

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, opacity); // Colore finale con opacità
        }
    `,
});

export let goochMaterialSp = new THREE.ShaderMaterial({
    uniforms: {
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        coolColor: { value: new THREE.Color(0x292520) }, // clay
        warmColor: { value: new THREE.Color(0xf8f6f1) }, 
        // coolColor: { value: new THREE.Color(0x0077ff) }, // cool
        // warmColor: { value: new THREE.Color(0xffaa00) }, 
        surfaceColor: { value: new THREE.Color(0xffffff) }, // Colore base
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `,
});

export let goochMaterialArrow = new THREE.ShaderMaterial({
    uniforms: {
        lightDirection: { value: new THREE.Vector3(1, 1, 1).normalize() },
        // coolColor: { value: new THREE.Color(0x292520) }, // clay
        // warmColor: { value: new THREE.Color(0xffebcc) }, 
        // coolColor: { value: new THREE.Color(0x0077ff) }, // cool
        // warmColor: { value: new THREE.Color(0xffaa00) }, 

        coolColor: { value: new THREE.Color(0x303030) }, // metal
        warmColor: { value: new THREE.Color(0x000000) }, //
        surfaceColor: { value: new THREE.Color(0xffffff) }, // Colore base
    },
    vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform vec3 lightDirection;
        uniform vec3 coolColor;
        uniform vec3 warmColor;
        uniform vec3 surfaceColor;

        varying vec3 vNormal;
        varying vec3 vPosition;

        void main() {
            // Calcola l'intensità della luce
            vec3 N = normalize(vNormal);
            vec3 L = normalize(lightDirection);

            // Intensity tra 0 e 1
            float intensity = dot(N, L) * 0.5 + 0.5;

            // Interpolazione tra colori freddo e caldo
            vec3 goochColor = mix(coolColor, warmColor, intensity);

            // Combina con il colore della superficie
            vec3 finalColor = surfaceColor * goochColor;

            gl_FragColor = vec4(finalColor, 1.0); // Colore finale
        }
    `,
});
