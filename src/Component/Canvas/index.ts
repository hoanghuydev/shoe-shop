import './Canvas.scss';
import * as THREE from 'three';
import { AnimationClip, Color, CubeTextureLoader, DoubleSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { appendChild, $, $$, User, listPart } from '../../global';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
let colorSelect = new THREE.Color();
let partShoe = '';
let interval;
let runAnimate = false;
export function handleColor(color: string): void {
    colorSelect = new THREE.Color(parseInt(color.replace('#', ''), 16));
}
export function getPart(): string {
    return partShoe;
}
export function setPart(part: string): void {
    console.log(part);

    partShoe = part;
    function updatePartElement() {
        listPart.map((part, index) => {
            $(`.table-part__item${index} > p`)?.classList.remove('bold');
            ($(`.table-part__item${index} > div`) as HTMLElement).classList.remove('d-flex');
        });
        ($(`.table-part__item${listPart.indexOf(part)}`) as HTMLElement).classList.add('bold');
        ($(`.table-part__item${listPart.indexOf(part)} > div`) as HTMLElement).classList.add(
            'd-flex'
        );
    }
    updatePartElement();
}
export function setRunAnimate(isRun: boolean) {
    runAnimate = isRun;
}
export function Canvas(part: string, runAnimation: boolean) {
    partShoe = part;
    runAnimate = runAnimation;
    // Render canvas div
    appendChild($('.root'), '<div class="canvasDiv"></div>');

    // setup
    const render = new THREE.WebGL1Renderer();
    render.shadowMap.enabled = true;
    render.setSize(window.innerWidth, window.innerHeight);
    // resize canvas
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        render.setSize(window.innerWidth, window.innerHeight);
    });
    $('.canvasDiv')?.appendChild(render.domElement);
    render.setClearColor(0xebebeb);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.01,
        1000
    );
    camera.position.set(-10, 15, -7);
    const controls = new OrbitControls(camera, render.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 30;
    // controls.enableZoom = false;

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
    planeCastShadow.receiveShadow = true;
    planeCastShadow.rotation.x = rotateX;
    scene.add(planeCastShadow);

    // load model
    // const mtlLoader = new MTLLoader();
    const gui = new dat.GUI();
    const shoesLoader = new OBJLoader();
    shoesLoader.load('./model/shoe.obj', function t(object: any) {
        object.material = new THREE.MeshStandardMaterial();
        object.position.x = -1;
        object.position.z = -3;
        object.traverse(function (child: any) {
            if (child instanceof THREE.Mesh) {
                child.material = new THREE.MeshStandardMaterial();
                child.material.color.set(0xffffff);
                child.castShadow = true;
                child.scale.set(0.2, 0.2, 0.2);
                child.position.y = 2;
            }
        });
        let colorSelectOld = colorSelect;
        interval = setInterval(() => {
            if (colorSelectOld != colorSelect) {
                colorSelectOld = colorSelect;
                switch (partShoe) {
                    case 'Eyelet':
                        object.getObjectByName('Circle001').material.color.set(colorSelect);
                        object.getObjectByName('Circle002').material.color.set(colorSelect);
                        object.getObjectByName('Circle011').material.color.set(colorSelect);
                        object.getObjectByName('Circle014').material.color.set(colorSelect);
                        break;
                    case 'Body':
                        object.getObjectByName('002').material.color.set(colorSelect);
                        object.getObjectByName('1').material.color.set(colorSelect);
                        break;
                    case 'Tongue':
                        object.getObjectByName('dil001').material.color.set(colorSelect);
                        object.getObjectByName('dil').material.color.set(colorSelect);
                        break;
                    case 'Sole':
                        object.getObjectByName('taban001').material.color.set(colorSelect);
                        object.getObjectByName('taban').material.color.set(colorSelect);
                        break;
                    case 'Heel Strap':
                        object.getObjectByName('arka001').material.color.set(colorSelect);
                        object.getObjectByName('arka').material.color.set(colorSelect);
                        break;
                    case 'Middle':
                        object.getObjectByName('gri001').material.color.set(colorSelect);
                        object.getObjectByName('gri').material.color.set(colorSelect);
                        break;
                    case 'Laces':
                        object.getObjectByName('Arc001').material.color.set(colorSelect);
                        object.getObjectByName('Arc002').material.color.set(colorSelect);
                        object.getObjectByName('Arc003').material.color.set(colorSelect);
                        object.getObjectByName('Arc004').material.color.set(colorSelect);
                        object.getObjectByName('Arc005').material.color.set(colorSelect);
                        object.getObjectByName('Arc006').material.color.set(colorSelect);
                        break;
                    case 'Heel Counter':
                        object.getObjectByName('Line001').material.color.set(colorSelect);
                        object.getObjectByName('Line002').material.color.set(colorSelect);
                        break;
                    case 'Vamp':
                        object.getObjectByName('Box001').material.color.set(colorSelect);
                        object.getObjectByName('Box002').material.color.set(colorSelect);
                        break;
                    default:
                        break;
                }
            }
            if (runAnimate) {
                object.rotation.y += 0.005;
            }
        }, 40);
        // function animate() {
        //     object.rotation.x += 0.01
        scene.add(object);
        // }
        //     render.setAnimationLoop(animate)
        return object;
    });
    const ambientLight = new THREE.AmbientLight(0x333333);
    ambientLight.position.set(-30, 50, 0);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 50, 0);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.bottom = -10; // Set size of shadow camera
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.left = 10;
    directionalLight.shadow.camera.right = -10;
    directionalLight.shadow.radius = 4;
    scene.add(directionalLight);

    function animate() {
        render.render(scene, camera);
    }
    render.setAnimationLoop(animate);
}
