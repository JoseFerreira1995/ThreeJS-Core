import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const height = window.innerHeight;
const width = window.innerWidth;

const scene = new THREE.Scene();

const fieldOfView = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 3;

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const geometry = new THREE.SphereGeometry(1, 18, 15);
const material = new THREE.MeshStandardMaterial({
  map: textureLoader.load("image/apple.png"),
});

const apple = new THREE.Mesh(geometry, material);
apple.scale.y = 0.9;
scene.add(apple);

const hemisphereLight = new THREE.HemisphereLight(0x337a2f, 0x374f37);
scene.add(hemisphereLight);

function animation() {
  apple.rotation.x += 0.001;
  apple.rotation.z += 0.001;
  controls.update();
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);
