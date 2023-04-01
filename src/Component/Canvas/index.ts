import './Canvas.scss';
import * as THREE from 'three';
import { AnimationClip, Color, CubeTextureLoader, DoubleSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { appendChild, $, $$, User } from '../../global';
function Canvas() {
    // Render canvas div
    appendChild($('.root'), '<div class="canvasDiv"></div>');

    // setup
    const render = new THREE.WebGL1Renderer();
    render.shadowMap.enabled = true;
    render.setSize(window.innerWidth, window.innerHeight);
    render.setClearColor(0xebebeb);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        1000
    );
    camera.position.set(-20, 30, 10);
    const controls = new OrbitControls(camera, render.domElement);
    controls.minDistance = 5;
    controls.maxDistance = 100;

    // Mesh
    // Plane basic
    const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
    const rotateX = -0.5 * Math.PI;
    const plane = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ color: 0xebebeb }));
    plane.rotation.x = rotateX;
    scene.add(plane);
    // plane to cast shadow withou light
    const planeCastShadow = new THREE.Mesh(
        planeGeometry,
        new THREE.ShadowMaterial({ opacity: 0.2 })
    );
    planeCastShadow.rotation.x = rotateX;
    scene.add(planeCastShadow);
    // load model
    const objLoader = new OBJLoader();

    // resize canvas
    window.addEventListener('resize', () => {
        camera.aspect = window.innerHeight / window.innerHeight;
        camera.updateProjectionMatrix();
        render.setSize(window.innerWidth, window.innerHeight);
    });
    function animate() {
        render.render(scene, camera);
    }
    render.setAnimationLoop(animate);
}
