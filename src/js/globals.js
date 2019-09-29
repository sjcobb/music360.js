// import InstrumentMappings from './InstrumentMappings.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

export default {
    // activeInstrColor: '#9F532A', //ltred
    // activeInstrColor: '#800000', //dkred
    // activeInstrColor: '#8F0000', //medred
    // activeInstrColor: '#0018F9', //music wheel I blue
    // activeInstrColor: '#7ec850', //grass green (lt)
    activeInstrColor: '#567d46', //grass green (md)
    autoScroll: true,
    autoStart: false,
    autoStartTime: 9000,
    camera: new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000),
    cameraPositionBehind: false,
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
    hideUI: true,
    instr: {},
    instrumentCounter: 0,
    keysOnly: true,
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
    staffLineInitZ: 8,
    staffLineSecondZ: -8,
    // showStaticRows: false,
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