import './Canvas.scss';
import * as THREE from 'three';
import { AnimationClip, Color, CubeTextureLoader, DoubleSide } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { appendChild, $, $$, listPart, updateCountCartItem } from '../../global';
import { Shoes, User } from '../../model/model';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DesignTable } from '../../design/Component/DesignTable';
import { TablePart } from '../../design/Component/TablePart';
import { API, request } from '../../untils/request';
import { Navbar } from '../Navbar';
// Trong thực tế ta nên dùng class component cho component này nhưng do project cá nhân và chưa dùng react nên làm class sẽ mất nhiều giai đoạn hơn

let colorSelect = new THREE.Color();
let partShoe = '';
let interval;
let runAnimate = false;
export function handleColor(color: string): void {
    colorSelect = new THREE.Color(parseInt(color.replace('#', ''), 16));
}
export function getCurrentPart() {
    return partShoe;
}
export function getIndexPart(partString: string): number {
    let indexPart = 0;
    listPart.map((part, index) => {
        if (part.partItem == partString) return (indexPart = index);
    });
    return indexPart;
}
export function setPart(part: string): void {
    const oldPart = partShoe;
    partShoe = part;
    // Update dom of part element
    function updatePartElement() {
        // update table part dom
        //  method 1
        // Remove active old part
        $(`.table-part__item${getIndexPart(oldPart)} > p`)?.classList.remove('bold');
        ($(`.table-part__item${getIndexPart(oldPart)} > div`) as HTMLElement).classList.remove(
            'd-flex'
        );
        // set active for current part in table of part shoes
        ($(`.table-part__item${getIndexPart(partShoe)}`) as HTMLElement).classList.add('bold');
        ($(`.table-part__item${getIndexPart(partShoe)} > div`) as HTMLElement).classList.add(
            'd-flex'
        );
        // method 2
        //  we can replace method  meth1 withod 2 but table-part will be re-render > show animation again , but method 2 pretty short
        // $('.root > .table-part')?.remove();
        // TablePart();
        // re-render design table
        $('.root > .design-table')?.remove();
        DesignTable();
    }
    updatePartElement();
}
// set true if checkbox run animate is checked
export function setRunAnimate(isRun: boolean) {
    runAnimate = isRun;
}
// get product when click btn add to card
export async function addToCart(
    imageShoes: string,
    colorListDesign: { color: string; partItem: string }[]
) {
    const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
    await request(
        API.addToCart(user._id),
        {
            userID: user._id,
            size: 40,
            quantity: 1,
            imageShoes,
        },
        user.accessToken
    );
}
export function Canvas(part: string, runAnimation: boolean) {
    partShoe = part;
    runAnimate = runAnimation;
    // Render canvas div
    appendChild(
        $('.root'),
        '<div class="canvasDiv" style="position : absolute;top :0;right:0;left:0;bottom:0;"></div>'
    );
    // Add btn add cart and handle click button
    function btnAddProduct() {
        appendChild(
            $('.root'),
            '<button type="button" class="btn btn-primary btn-add-cart">Add To Cart</button'
        );
        $('.btn-add-cart')?.addEventListener('click', async function () {
            if (JSON.parse(localStorage.getItem('isLogged') ?? 'false')) {
                const imageShoes = createImageLink();
                addToCart(imageShoes, listPart);
                ($('.toast-container') as HTMLElement).innerHTML = `
            <div class="col-8 me-2 mb-2">
                <div
                class="toast show toast-success"
                role="alert"
                >
                    <div class="toast-header toast-success">
                      <i class="fas fa-exclamation-circle fa-lg me-2"></i>
                      <strong class="me-auto">Success</strong>
                    </div>
                    <div class="toast-body">Added to cart</div>
                  </div>
                </div>
            </div>
            `;
                updateCountCartItem(1);
            } else {
                ($('.toast-container') as HTMLElement).innerHTML = `
            <div class="col-8 me-2 mb-2">
                <div
                class="toast show toast-danger"
                role="alert"
                >
                    <div class="toast-header toast-danger">
                      <i class="fas fa-exclamation-circle fa-lg me-2"></i>
                      <strong class="me-auto">Waring</strong>
                    </div>
                    <div class="toast-body">You need login to buy this item.</div>
                  </div>
                </div>
            </div>
            `;
            }
        });
        function createImageLink(): string {
            let imgData = '';
            let strDownloadMime = 'image/octet-stream';
            try {
                let strMime = 'image/jpeg';
                imgData = render.domElement.toDataURL(strMime, 0.7);

                return imgData;
            } catch (e) {
                console.log(e);
                return '';
            }
        }
    }
    btnAddProduct();

    // setup
    const render = new THREE.WebGL1Renderer({
        preserveDrawingBuffer: true,
    });
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
    controls.enablePan = false;
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
                const colorHexString = colorSelect.getHexString();
                switch (partShoe) {
                    case listPart[0].partItem:
                        listPart[0].color = colorHexString;
                        object.getObjectByName('Arc001').material.color.set(colorSelect);
                        object.getObjectByName('Arc002').material.color.set(colorSelect);
                        object.getObjectByName('Arc003').material.color.set(colorSelect);
                        object.getObjectByName('Arc004').material.color.set(colorSelect);
                        object.getObjectByName('Arc005').material.color.set(colorSelect);
                        object.getObjectByName('Arc006').material.color.set(colorSelect);
                        break;
                    case listPart[1].partItem:
                        listPart[1].color = colorHexString;
                        object.getObjectByName('Box001').material.color.set(colorSelect);
                        object.getObjectByName('Box002').material.color.set(colorSelect);
                        break;
                    case listPart[2].partItem:
                        listPart[2].color = colorHexString;
                        object.getObjectByName('dil001').material.color.set(colorSelect);
                        object.getObjectByName('dil').material.color.set(colorSelect);
                        break;
                    case listPart[3].partItem:
                        listPart[3].color = colorHexString;
                        object.getObjectByName('arka001').material.color.set(colorSelect);
                        object.getObjectByName('arka').material.color.set(colorSelect);
                        break;
                    case listPart[4].partItem:
                        listPart[4].color = colorHexString;
                        object.getObjectByName('Line001').material.color.set(colorSelect);
                        object.getObjectByName('Line002').material.color.set(colorSelect);
                        break;
                    case listPart[5].partItem:
                        listPart[5].color = colorHexString;
                        object.getObjectByName('Circle001').material.color.set(colorSelect);
                        object.getObjectByName('Circle002').material.color.set(colorSelect);
                        object.getObjectByName('Circle011').material.color.set(colorSelect);
                        object.getObjectByName('Circle014').material.color.set(colorSelect);
                        break;
                    case listPart[6].partItem:
                        listPart[6].color = colorHexString;
                        object.getObjectByName('002').material.color.set(colorSelect);
                        object.getObjectByName('1').material.color.set(colorSelect);
                        break;
                    case listPart[7].partItem:
                        listPart[7].color = colorHexString;
                        object.getObjectByName('gri001').material.color.set(colorSelect);
                        object.getObjectByName('gri').material.color.set(colorSelect);
                        break;
                    case listPart[8].partItem:
                        listPart[8].color = colorHexString;
                        object.getObjectByName('taban001').material.color.set(colorSelect);
                        object.getObjectByName('taban').material.color.set(colorSelect);
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
