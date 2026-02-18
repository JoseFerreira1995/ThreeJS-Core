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

renderer.render(scene, camera);
