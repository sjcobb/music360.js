// import InstrumentMappings from './InstrumentMappings.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

export default {
    activeInstrColor: '#9F532A', //red
    // activeInstrColor: '#0018F9', //music wheel I blue
    autoScroll: true,
    autoStart: false,
    autoStartTime: 9000,
    camera: new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000),
    cameraPositionBehind: true,
    // cameraLookUp: true,
    cameraLookUp: false,
    clock: new THREE.Clock(),
    configColorAnimate: true,
    controls: '',
    // controls: new FlyControls(camera),
    damping: 0.01,
    dropPosX: 5.5,
    fixedTimeStep: 1.0 / 60.0,
    flameArr: [],
    flameCounter: 0,
    instr: {},
    instrumentCounter: 0,
    lastColor: '#000000',
    loader: new THREE.TextureLoader(),
    multiplierPosX: -2.5,
    musicActive: false,
    posBehindX: -30,
    posBehindY: 2,
    posBehindZ: 3.8,
    groundMeshIncrementer: 0,
    renderer: new THREE.WebGLRenderer(),
    scene: new THREE.Scene(),
    showStaticRows: false,
    ticks: 0,
    triggerAnimationTime: '4:0:0',
    // Transport: Tone.Transport, //TODO: add Transport here for logging ticks and position
    world: new CANNON.World(),
};

/*** COLOR OPTIONS ***/
// '#7cfc00'; //lawn green
// '#F8041E'; //fire temple red med
// '#9F532A'; //fire temple red dk
// '#191CAC'; //deepblue
// '#0018F9'; //music wheel I blue
// '#C6018B'; //music wheel VI pink
// '#4B0AA1'; //music wheel V - dkblue
// '#006CFA'; //music wheel IV - medblue