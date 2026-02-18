import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(1, 3);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  flatShading: true,
});

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const hemisphereLight = new THREE.HemisphereLight(0x1c45e6, 0x9c6e1e);
scene.add(hemisphereLight);

function animate(t = 0) {
  sphere.rotation.y = t * 0.0001;
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
