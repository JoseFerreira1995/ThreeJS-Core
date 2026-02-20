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
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

renderer.setSize(width, height);

document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 6);
const material = new THREE.MeshStandardMaterial({
  map: textureLoader.load("images/earthmap1k.jpg"),
});

const earth = new THREE.Mesh(geometry, material);
scene.add(earth);

// const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
// scene.add(hemisphereLight);

const sunLight = new THREE.DirectionalLight(0xffffff, 3);

sunLight.position.set(1, 2, 3);
scene.add(sunLight);

function animate() {
  earth.rotation.y += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
