import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

const fieldOfView = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);

renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 6);
const material = new THREE.MeshStandardMaterial({
  map: textureLoader.load("/images/apple.jpg"),
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

const hemisphereLight = new THREE.HemisphereLight(0x000000, 0xffffff);
scene.add(hemisphereLight);

function animate() {
  earth.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
