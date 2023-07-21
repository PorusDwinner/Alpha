import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// Create a scene
var scene = new THREE.Scene();

// Create a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;
camera.position.y = -14;
// camera.position.x = 12;

// Create a renderer
const gltfLoader = new GLTFLoader();
// const brainLeft = await gltfLoader.loadAsync('./images/brainleft.gltf');

const canvas = document.querySelector('.canvas');
const brainleftDiv = document.querySelector('.brainleft');
var renderer = new THREE.WebGLRenderer({ canvas , brainleftDiv});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2);

// Geometry (sphere) and Material for first animation
var geometry = new THREE.SphereGeometry(8, 64, 64);

const loadingManager = new THREE.LoadingManager();
var loader = new THREE.TextureLoader(loadingManager)
var moonTexture = loader.load('./images/moonTexture.jpg');
var material = new THREE.MeshPhongMaterial({
    map: moonTexture,
    roughness: 0.4,
});
var moon = new THREE.Mesh(geometry, material);

// Add the moon to the scene
scene.add(moon);

// Create ambient light
var ambientLightForFirstAnimation = new THREE.AmbientLight(0x000000);
scene.add(ambientLightForFirstAnimation);

// Create directional light
var directionalLightForFirstAnimation = new THREE.DirectionalLight(0xffffff);
directionalLightForFirstAnimation.position.set(0, 1, 0);
scene.add(directionalLightForFirstAnimation);

// orbit controls, 
const controls = new OrbitControls(camera, canvas);

// const axisHelper = new THREE.AxesHelper(20);
// scene.add(axisHelper);

//*******************************GEOMETRY TWO********************************************/
var geometryTwo = new THREE.SphereGeometry(8, 64, 64, 0, 2.88398205599543, 0, 3.141592653589793);
var materialTwo = new THREE.MeshPhongMaterial({
    map: moonTexture,
    roughness: 0.4,
    // side : THREE.DoubleSide,
});
const halfMoon = new THREE.Mesh(geometryTwo, materialTwo);
//*************************************************************************************** */

var moonRotationSpeedX = 0.01;
var moonRotationSpeedY = 0;

// Animation loop
function moonAnimate() {
    controls.update();
    requestAnimationFrame(moonAnimate);
    moon.rotation.x -= `${moonRotationSpeedX}`;
    moon.rotation.y -= `${moonRotationSpeedY}`;
    renderer.render(scene, camera);

    setTimeout(() => {
        scene.remove(moon);
        scene.add(halfMoon);
        halfMoon.rotation.y += 0.01;
        camera.position.y = 0;
        camera.position.z = 25;
    }, 5000)
}
moonAnimate();

// FUNCTION TO UPDATE AMBIENT LIGHT

function updateAmbientLight() {
    setTimeout(() => {
        // console.log('Ambient light update funciton triggered');
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        })
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x131313);
        }, 100)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x191919);
        }, 200)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x292828);
        }, 300)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x333232);
        }, 400)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x3c3c3c);
        }, 500)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x444343);
        }, 600)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x525151);
        }, 700)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x525151);
        }, 800)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x525151);
        }, 900)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        }, 1000)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        }, 100)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        }, 1100)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        }, 1200)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x0b0b0b);
        }, 1300)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x5f5e5e);
        }, 1400)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x696868);
        }, 1500)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x727171);
        }, 1600)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x7a7979);
        }, 1700)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x858383);
        }, 1800)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0x959494);
        }, 1900)
        setTimeout(() => {
            ambientLightForFirstAnimation.color.set(0xa09e9e);
        }, 2000)
        setTimeout(() => {
            moonRotationSpeedX = 0;
            moonRotationSpeedY = 0.01;
        }, 2100);
        // setTimeout(() => {
        //     geovalue = new THREE.SphereGeometry(8, 64, 64, 0, 2.88398205599543, 0, 3.141592653589793);
        // },2200)
    }, 3000);
}
updateAmbientLight();

