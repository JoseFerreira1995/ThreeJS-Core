import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;
const fieldOfView = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer();

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 3);
const material = new THREE.MeshStandardMaterial({
  color: 0x00afff,
  flatShading: true,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemisphereLight);

function animate(t = 0) {
    sphere.rotation.y = t * 0.0001
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
