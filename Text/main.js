import * as THREE from "three";

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

const fieldOfView = 75;
const aspect = width / height;
const near = 0.1;
const far = 100;

const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
camera.position.z = 7;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

const text = new THREE.BoxGeometry(1, 2, 6);
const material = new THREE.MeshStandardMaterial({
  color: 0x00fff0,
});

const cube = new THREE.Mesh(text, material);
scene.add(cube);

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0xffffff);
scene.add(hemisphereLight);

function animation() {
  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animation);

window.addEventListener("scroll", () => {
  const scollOnX = window.scrollY / document.body.clientHeight;
  cube.rotation.x = scollOnX * 5;
});
