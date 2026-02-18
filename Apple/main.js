import * as THREE from "three";

const height = window.innerHeight;
const width = window.innerWidth;

const scene = new THREE.Scene();

const fieldOfView = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer();

renderer.setSize(height, width);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 7);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
});

const apple = new THREE.Mesh(geometry, material);
scene.add(apple);

const hemisphereLight = new THREE.HemisphereLight(0x337A2F, 0x374F37);
scene.add(hemisphereLight);

function animation() {
    apple.rotation.x += 0.001
    apple.rotation.z += 0.001
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
