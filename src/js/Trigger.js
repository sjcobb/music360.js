import Tone from 'Tone';
import { Transport, Player, Players, Part, Time, Volume } from 'Tone';

import { generateInstrMetadata } from './InstrumentMappings';

// import Transport from 'Tone/core/Transport';
// import Volume from 'Tone/component/Volume';

import Store from './Store';

import InstrumentMappings from './InstrumentMappings';
import { getInstrByNote } from './InstrumentMappings';

import Physics from './Physics';
import Flame from './Flame';

import * as recordingFirstNotes from '../../assets/recording/1.json';
import * as recordingSecondNotes from '../../assets/recording/1.json';

console.log({recordingFirstNotes});
// console.log(recordingFirstNotes.tracks[0].notes);
console.log({recordingSecondNotes});

//////////
// TONE //
/////////
// Tone.Transport.bpm.value = 200; //PREV
// Tone.Transport.bpm.value = 120;
Tone.Transport.bpm.value = Store.bpm;
// Tone.Transport.bpm.rampTo(120, 10);

// https://tonejs.github.io/docs/r13/Transport#timesignature
Tone.Transport.timeSignature = 12; // v0.4, v0.5

// Tone.Transport.timeSignature = 4;     // DEFAULT

// Tone.Transport.setLoopPoints(0, "13m"); //starts over at beginning
// Tone.Transport.loop = true; //TODO: *** clear all addBody objects if Transport loop true

/////////////
// SAMPLER //
/////////////
// https://tonejs.github.io/docs/r11/Sampler

const samplerAssetPath = './assets/samples/violin/'
// const samplerAssetPath = './assets/samples/guitar-acoustic/'

Store.sampler.strings = new Tone.Sampler({
    'A3': samplerAssetPath + 'A3.[mp3|ogg]',
    'A4': samplerAssetPath + 'A4.[mp3|ogg]',
    'A5': samplerAssetPath + 'A5.[mp3|ogg]',
    'A6': samplerAssetPath + 'A6.[mp3|ogg]',
    'C4': samplerAssetPath + 'C4.[mp3|ogg]',
    'C5': samplerAssetPath + 'C5.[mp3|ogg]',
    'C6': samplerAssetPath + 'C6.[mp3|ogg]',
    'C7': samplerAssetPath + 'C7.[mp3|ogg]',
    'E4': samplerAssetPath + 'E4.[mp3|ogg]',
    'E5': samplerAssetPath + 'E5.[mp3|ogg]',
    'E6': samplerAssetPath + 'E6.[mp3|ogg]',
    'G4': samplerAssetPath + 'G4.[mp3|ogg]',
    'G5': samplerAssetPath + 'G5.[mp3|ogg]',
    'G6': samplerAssetPath + 'G6.[mp3|ogg]',

    // 'F3': samplerAssetPath + 'F3.[mp3|ogg]',
    // 'F#1': samplerAssetPath + 'Fs1.[mp3|ogg]',
    // 'F#2': samplerAssetPath + 'Fs2.[mp3|ogg]',
    // 'F#3': samplerAssetPath + 'Fs3.[mp3|ogg]',
    // 'G1': samplerAssetPath + 'G1.[mp3|ogg]',
    // 'G2': samplerAssetPath + 'G2.[mp3|ogg]',
    // 'G3': samplerAssetPath + 'G3.[mp3|ogg]',
    // 'G#1': samplerAssetPath + 'Gs1.[mp3|ogg]',
    // 'G#2': samplerAssetPath + 'Gs2.[mp3|ogg]',
    // 'G#3': samplerAssetPath + 'Gs3.[mp3|ogg]',
    // 'A1': samplerAssetPath + 'A1.[mp3|ogg]',
    // 'A2': samplerAssetPath + 'A2.[mp3|ogg]',
    // 'A3': samplerAssetPath + 'A3.[mp3|ogg]',
    // 'A#1': samplerAssetPath + 'As1.[mp3|ogg]',
    // 'A#2': samplerAssetPath + 'As2.[mp3|ogg]',
    // 'A#3': samplerAssetPath + 'As3.[mp3|ogg]',
    // 'B1': samplerAssetPath + 'B1.[mp3|ogg]',
    // 'B2': samplerAssetPath + 'B2.[mp3|ogg]',
    // 'B3': samplerAssetPath + 'B3.[mp3|ogg]',
    // 'C2': samplerAssetPath + 'C2.[mp3|ogg]',
    // 'C3': samplerAssetPath + 'C3.[mp3|ogg]',
    // 'C4': samplerAssetPath + 'C4.[mp3|ogg]',
    // 'C#2': samplerAssetPath + 'Cs2.[mp3|ogg]',
    // 'C#3': samplerAssetPath + 'Cs3.[mp3|ogg]',
    // 'C#4': samplerAssetPath + 'Cs4.[mp3|ogg]',
    // 'D1': samplerAssetPath + 'D1.[mp3|ogg]',
    // 'D2': samplerAssetPath + 'D2.[mp3|ogg]',
    // 'D3': samplerAssetPath + 'D3.[mp3|ogg]',
    // 'D4': samplerAssetPath + 'D4.[mp3|ogg]',
    // 'D#1': samplerAssetPath + 'Ds1.[mp3|ogg]',
    // 'D#2': samplerAssetPath + 'Ds2.[mp3|ogg]',
    // 'D#3': samplerAssetPath + 'Ds3.[mp3|ogg]',
    // 'E1': samplerAssetPath + 'E1.[mp3|ogg]',
    // 'E2': samplerAssetPath + 'E2.[mp3|ogg]',
    // 'E3': samplerAssetPath + 'E3.[mp3|ogg]',
    // 'F1': samplerAssetPath + 'F1.[mp3|ogg]',
    // 'F2': samplerAssetPath + 'F2.[mp3|ogg]',
}, function(){
    Store.sampler.strings.triggerAttackRelease("A3");
}).toMaster();

// Store.sampler.strings.volume.value = -32;
Store.sampler.strings.volume.value = -26;
console.log(Store.sampler.strings);

// 

const samplerAssetPathAlt = './assets/samples/guitar-acoustic/'
Store.sampler.guitar = new Tone.Sampler({
    'F3': samplerAssetPathAlt + 'F3.[mp3|ogg]',
    'F#1': samplerAssetPathAlt + 'Fs1.[mp3|ogg]',
    'F#2': samplerAssetPathAlt + 'Fs2.[mp3|ogg]',
    'F#3': samplerAssetPathAlt + 'Fs3.[mp3|ogg]',
    'G1': samplerAssetPathAlt + 'G1.[mp3|ogg]',
    'G2': samplerAssetPathAlt + 'G2.[mp3|ogg]',
    'G3': samplerAssetPathAlt + 'G3.[mp3|ogg]',
    'G#1': samplerAssetPathAlt + 'Gs1.[mp3|ogg]',
    'G#2': samplerAssetPathAlt + 'Gs2.[mp3|ogg]',
    'G#3': samplerAssetPathAlt + 'Gs3.[mp3|ogg]',
    'A1': samplerAssetPathAlt + 'A1.[mp3|ogg]',
    'A2': samplerAssetPathAlt + 'A2.[mp3|ogg]',
    'A3': samplerAssetPathAlt + 'A3.[mp3|ogg]',
    'A#1': samplerAssetPathAlt + 'As1.[mp3|ogg]',
    'A#2': samplerAssetPathAlt + 'As2.[mp3|ogg]',
    'A#3': samplerAssetPathAlt + 'As3.[mp3|ogg]',
    'B1': samplerAssetPathAlt + 'B1.[mp3|ogg]',
    'B2': samplerAssetPathAlt + 'B2.[mp3|ogg]',
    'B3': samplerAssetPathAlt + 'B3.[mp3|ogg]',
    'C2': samplerAssetPathAlt + 'C2.[mp3|ogg]',
    'C3': samplerAssetPathAlt + 'C3.[mp3|ogg]',
    'C4': samplerAssetPathAlt + 'C4.[mp3|ogg]',
    'C#2': samplerAssetPathAlt + 'Cs2.[mp3|ogg]',
    'C#3': samplerAssetPathAlt + 'Cs3.[mp3|ogg]',
    'C#4': samplerAssetPathAlt + 'Cs4.[mp3|ogg]',
    'D1': samplerAssetPathAlt + 'D1.[mp3|ogg]',
    'D2': samplerAssetPathAlt + 'D2.[mp3|ogg]',
    'D3': samplerAssetPathAlt + 'D3.[mp3|ogg]',
    'D4': samplerAssetPathAlt + 'D4.[mp3|ogg]',
    'D#1': samplerAssetPathAlt + 'Ds1.[mp3|ogg]',
    'D#2': samplerAssetPathAlt + 'Ds2.[mp3|ogg]',
    'D#3': samplerAssetPathAlt + 'Ds3.[mp3|ogg]',
    'E1': samplerAssetPathAlt + 'E1.[mp3|ogg]',
    'E2': samplerAssetPathAlt + 'E2.[mp3|ogg]',
    'E3': samplerAssetPathAlt + 'E3.[mp3|ogg]',
    'F1': samplerAssetPathAlt + 'F1.[mp3|ogg]',
    'F2': samplerAssetPathAlt + 'F2.[mp3|ogg]',
}, function(){
    Store.sampler.guitar.triggerAttackRelease("A3");
}).toMaster();

// Store.sampler.guitar.volume.value = -32;
Store.sampler.guitar.volume.value = -26;
console.log(Store.sampler.guitar);

///////////
// SYNTH //
///////////
// https://tonejs.github.io/examples/polySynth.html
// https://tonejs.github.io/docs/13.8.25/PolySynth

// var polySynth = new Tone.PolySynth(6, Tone.Synth, {
// Store.polySynth = new Tone.PolySynth(4, Tone.Synth, { // default
Store.polySynth = new Tone.PolySynth(10, Tone.Synth, {
    // oscillator: {
    //     type: "triangle", // sine, square, sawtooth, triangle (default), custom
    //     // frequency: 440 ,
    //     // detune: 0 ,
    //     // phase: 0 ,
    //     // partials: [] ,
    //    partialCount: 0
    // },
    // // https://tonejs.github.io/docs/13.8.25/Envelope
    envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.3,
        release: 1,
        // attack: 0.1,
        // decay: 0.2,
        // sustain: 1, // v0.5
        // sustain: 0.5, 
        // release: 0.8,
    },
    // // https://tonejs.github.io/docs/13.8.25/Filter#type
    // filter: {
	// 	// type: "highpass", // lowpass, highpass, bandpass, lowshelf, highshelf, notch, allpass, peaking
	// },
}).toMaster();

// Store.polySynth.volume.value = -8; // v0.4, v0.5
Store.polySynth.volume.value = -18;

// Store.polySynth.set("detune", +1200); // octave = 12 semitones of 100 cents each
// Store.polySynth.set("detune", +1200);

const bounceSynth = new Tone.Synth();
bounceSynth.volume.value = 2;
bounceSynth.toMaster();

var toneSnare = new Tone.NoiseSynth({
    "volume": -5.0,
    "envelope": {
        "attack": 0.001,
        "decay": 0.2,
        "sustain": 0
    },
    "filterEnvelope": {
        "attack": 0.001,
        "decay": 0.1,
        "sustain": 0
    }
}).toMaster();

// const player808HiHat = new Player(`${sampleBaseUrl}/808-hihat-vh.mp3`).toMaster();
// const playerHiHatOpen = new Tone.Player("./assets/sounds/drum-kits/dubstep/hihat-open.mp3").toMaster(); //PREV
const playerHiHatOpen = new Player("./assets/sounds/drum-kits/dubstep/hihat-open.mp3").toMaster();
const playerHiHat = new Player("./assets/sounds/drum-kits/dubstep/hihat-closed.mp3").toMaster();
playerHiHatOpen.volume.value = -2;
playerHiHat.volume.value = -2;

// const playerKick = new Player("./assets/sounds/drum-kits/analog/kick.mp3").toMaster(); //aka dubstep - 808?
// const playerKick = new Player("./assets/sounds/drum-kits/dubstep/kick.mp3").toMaster(); //aka analog - PREV
// const playerKick = new Player("./assets/sounds/drum-kits/electronic/kick.mp3").toMaster(); //guitar pluck
// const playerKick = new Player("./assets/sounds/drum-kits/percussion/kick.mp3").toMaster(); //normal

// const playerKick = new Player("./assets/sounds/drum-kits/808/808-kick-vh.mp3").toMaster(); // high
const playerKick = new Player("./assets/sounds/drum-kits/808/808-kick-vm.mp3").toMaster(); // medium
// const playerKick = new Player("./assets/sounds/drum-kits/808/808-kick-vl.mp3").toMaster(); // low

// const playerKick = new Player("./assets/sounds/drum-kits/hiphop/kick.mp3").toMaster(); //v2, v3, v4 (boring, but not distorted)
playerKick.volume.value = +2;

// playerKick.volume.value = -6; // -6 broken
// playerKick.input.value = -4; //err
// {
//     onload: Tone.noOp ,
//     playbackRate: 1 ,
//     loop: false ,
//     autostart: false ,
//     loopStart: 0 ,
//     loopEnd: 0 ,
//     reverse: false ,
//     fadeIn: 0 ,
//     fadeOut: 0
// }

console.log({playerKick});
// input: AudioParam {value: 1, automationRate: "a-rate", defaultValue: 1, minValue: -3.4028234663852886e+38, maxValue: 3.4028234663852886e+38}

const playerCrash = new Player("./assets/sounds/drum-kits/hiphop/clap.mp3").toMaster(); //hand clap echo
// const playerCrash = new Player("./assets/sounds/drum-kits/percussion/clap.mp3").toMaster(); //stick click

// const playerRide = new Player("./assets/sounds/drum-kits/dubstep/ride.wav").toMaster(); //drum stick click
const playerRide = new Player("./assets/sounds/drum-kits/hiphop/ride.mp3").toMaster(); //cool click pop
// const playerRide = new Player("./assets/sounds/drum-kits/electronic/ride.mp3").toMaster(); //high tick metal
// const playerRide = new Player("./assets/sounds/drum-kits/percussion/ride.mp3").toMaster(); //weird low squeak 
// const playerRide = new Player("./assets/sounds/drum-kits/analog/ride.mp3").toMaster(); // drum stick click

const playerTomHigh = new Player("./assets/sounds/drum-kits/electronic/tom-high.mp3").toMaster();
const playerTomMid = new Player("./assets/sounds/drum-kits/electronic/tom-mid.mp3").toMaster();
// const playerTomLow = new Player("./assets/sounds/drum-kits/electronic/tom-low.mp3").toMaster();

// let flameFirst = new Flame();

export default class Trigger {
    constructor() {
        // super();
    }
    
    triggerNote(obj) {
        // console.log({obj});
        // console.log(obj.userData.opts);

        const physics = new Physics();

        const instrument = new InstrumentMappings();

        Store.musicActive = true; //remove?

        // console.log('Store.inputMidi: ', Store.inputMidi);
        if (Store.inputMidi === true) {

        } else {

        }
        // console.log('Trigger -> addBody - opts: ', obj.userData.opts);
        
        let triggerObj = {};
        let combinedNote = 'C1';
        if (obj.userData.opts.type !== 'drum') {
            combinedNote = obj.userData.opts.note ? (obj.userData.opts.note + obj.userData.opts.octave) : 'C4';
            // console.log({combinedNote});

            Store.dashboard.lastNote = combinedNote;

            Store.dashboard.allPlayedNotes.push(combinedNote);
            // Store.dashboard.allPlayedNotes.push(obj.userData.opts.note);
            // Store.dashboard.allPlayedOctaves.push(obj.userData.opts.octave);
            // // Store.dashboard.noteCountsDataset.source.note.push(obj.userData.opts.note);
            // // Store.dashboard.noteCountsDataset.source.octave.push(obj.userData.opts.octave);

            // const noteDatum = {

            // };
            // Store.dashboard.noteCounts.push(
            //     {
            //         note: obj.userData.opts.note,
            //         octave: obj.userData.opts.octave,
            //         count: 1
            //     }
            // )

            // if (Store.instr[obj.userData.opts.objName].count != null) {
            //     Store.instr[obj.userData.opts.objName].count++;
            // } else {
            //     Store.instr[obj.userData.opts.objName].count = 1;
            // }

            if (Store.dashboard.noteCountsObj[combinedNote] != null) {
                Store.dashboard.noteCountsObj[combinedNote].count++;
            } else {
                Store.dashboard.noteCountsObj[combinedNote] = {
                    note: obj.userData.opts.note,
                    octave: obj.userData.opts.octave,
                    count: 1,
                };
                // Store.dashboard.noteCountsObj[combinedNote].count = 1;
            }
            // console.log(Object.entries(Store.dashboard.noteCountsObj));
            // Store.dashboard.noteCountsArr = Object.entries(Store.dashboard.noteCountsObj);

            Store.dashboard.noteCountsArr = [];
            for (let key in Store.dashboard.noteCountsObj){
                // console.log({key});
                Store.dashboard.noteCountsArr.push(Store.dashboard.noteCountsObj[key]);
            }

            // https://stackoverflow.com/a/8900824/7639084
            Store.dashboard.noteCountsArr.sort(function(a, b) {
                // console.log(a, b);
                var textA = a.note.toUpperCase();
                var textB = b.note.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            // console.log('triggerNote -> Store.dashboard.allPlayedNotes: ', Store.dashboard.allPlayedNotes);

            Store.dashboard.recentPlayedNotes.push(combinedNote);
            // console.log('triggerNote -> Store.dashboard.recentPlayedNotes: ', Store.dashboard.recentPlayedNotes);

            triggerObj = obj.userData.opts;

        } else {
            triggerObj = instrument.getNoteMapping(obj); //ORIG
        }
        
        // console.log('Trigger -> combinedNote: ', combinedNote);
        let drumIndex = 0;
        if (triggerObj.type === 'drum') {
            if (triggerObj.variation === 'kick') {
                // console.log('trigger -> playerKick: ', playerKick);
                playerKick.start();
                // toneKick.triggerAttackRelease("C2"); //deep
            } else if (triggerObj.variation === 'hihat') {
                playerHiHat.start();
            } else if (triggerObj.variation === 'hihat-open') {
                playerHiHatOpen.start();
            } else if (triggerObj.variation === 'snare') {
                toneSnare.triggerAttackRelease();
            } else if (triggerObj.variation === 'crash') {
                playerCrash.start();
                // toneCrash.triggerAttackRelease("C4"); //laser
            } else if (triggerObj.variation === 'ride') {
                playerRide.start();
            } else if (triggerObj.variation === 'tom-high') {
                playerTomHigh.start(); // key: 7
                // flameFirst.create(obj.initPosition);
            } else {
                // console.log('UNDEF variation - triggerNote() -> triggerObj (drum): ', triggerObj);
                playerHiHat.start();
            }
            drumIndex++;
        } else if (triggerObj.type === 'chord') { // TODO: rename, universal chord / note accessor
            // console.log('triggerNote (chord) -> combinedNote: ', combinedNote);
            // console.log('triggerNote (chord) -> triggerObj: ', triggerObj);

            // console.log('triggerNote (chord) -> obj.userData.opts.duration: ', obj.userData.opts.duration);
            console.log('triggerNote (chord - ', combinedNote, ') -> obj.userData.opts.duration: ', obj.userData.opts.duration);
            const noteLength = obj.userData.opts.duration ? obj.userData.opts.duration : 0.15;

            if (triggerObj.variation === 'violin') {
                Store.sampler.strings.triggerAttackRelease(combinedNote, noteLength); 
            } else if (triggerObj.variation === 'guitar') {
                Store.sampler.guitar.triggerAttackRelease(combinedNote, noteLength); 
            } else {
                Store.polySynth.triggerAttackRelease(combinedNote, noteLength); 
            }
        } else {
            bounceSynth.triggerAttackRelease(combinedNote, "8n");
            // console.log('triggerNote -> ballDesc: ', triggerObj.ballDesc, ', note: ', combinedNote);
        }

        Store.musicActive = false; //remove?

        if (Store.configColorAnimate === true && triggerObj.color) {
            // console.log("configColorAnimate -> GLOBALS: ", globals);
            if (triggerObj.type !== 'drum') {
                Store.activeInstrColor = triggerObj.color;
            }
        }
    }

}



//-----RECORDING------//
// https://codepen.io/gregh/project/editor/aAexRX

const physics = new Physics();

// const recordingNotes = Store.dashboard.midiConvertData.source;

// const recordingNotes = [{"duration":0.8,"name":"A#4","time":0,"velocity":1},{"duration":0.08333333333333326,"name":"A#4","time":1.0666666666666667,"velocity":1},{"duration":0.08749999999999991,"name":"A#4","time":1.2,"velocity":1},{"duration":0.08916666666666662,"name":"A#4","time":1.3291666666666666,"velocity":1},{"duration":0.08333333333333326,"name":"A#4","time":1.4666666666666666,"velocity":1},{"duration":0.12916666666666665,"name":"A#4","time":1.5999999999999999,"velocity":1},{"duration":0.08333333333333326,"name":"G#4","time":1.8666666666666665,"velocity":1},{"duration":0.5333333333333334,"name":"A#4","time":1.9999999999999998,"velocity":1},{"duration":0.08333333333333348,"name":"A#4","time":2.6666666666666665,"velocity":1},{"duration":0.08749999999999991,"name":"A#4","time":2.8,"velocity":1},{"duration":0.08916666666666684,"name":"A#4","time":2.9291666666666663,"velocity":1},{"duration":0.08333333333333348,"name":"A#4","time":3.0666666666666664,"velocity":1},{"duration":0.12916666666666687,"name":"A#4","time":3.1999999999999997,"velocity":1},{"duration":0.08333333333333348,"name":"G#4","time":3.466666666666667,"velocity":1},{"duration":0.5958333333333337,"name":"A#4","time":3.6,"velocity":1},{"duration":0.08333333333333304,"name":"A#4","time":4.2666666666666675,"velocity":1},{"duration":0.08750000000000036,"name":"A#4","time":4.4,"velocity":1},{"duration":0.0891666666666664,"name":"A#4","time":4.529166666666668,"velocity":1},{"duration":0.08333333333333304,"name":"A#4","time":4.666666666666668,"velocity":1},{"duration":0.12916666666666643,"name":"A#4","time":4.800000000000001,"velocity":1},{"duration":0.0625,"name":"F4","time":5.000000000000001,"velocity":1},{"duration":0.0625,"name":"F4","time":5.1000000000000005,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":5.2,"velocity":1},{"duration":0.0625,"name":"F4","time":5.4,"velocity":1},{"duration":0.0625,"name":"F4","time":5.5,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":5.6,"velocity":1},{"duration":0.0625,"name":"F4","time":5.8,"velocity":1},{"duration":0.0625,"name":"F4","time":5.8999999999999995,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":5.999999999999999,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":6.199999999999999,"velocity":1},{"duration":0.2625000000000002,"name":"A#4","time":6.3999999999999995,"velocity":1},{"duration":0.1299999999999999,"name":"D4","time":6.8,"velocity":0.8661417322834646},{"duration":0.13416666666666632,"name":"D4","time":6.93,"velocity":0.8661417322834646},{"duration":0.13333333333333375,"name":"C4","time":7.066666666666666,"velocity":0.8661417322834646},{"duration":0.2999999999999998,"name":"D4","time":7.2,"velocity":0.8661417322834646},{"duration":0.09999999999999964,"name":"A#4","time":7.5,"velocity":1},{"duration":0.09166666666666679,"name":"A#4","time":7.6,"velocity":1},{"duration":0.09166666666666679,"name":"C5","time":7.7,"velocity":1},{"duration":0.09166666666666679,"name":"D5","time":7.800000000000001,"velocity":1},{"duration":0.09166666666666679,"name":"D#5","time":7.900000000000001,"velocity":1},{"duration":0.2916666666666661,"name":"F5","time":8.000000000000002,"velocity":1},{"duration":0.09166666666666679,"name":"A#4","time":8.3,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"A#4","time":8.4,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"C5","time":8.5,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"D5","time":8.6,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"D#5","time":8.7,"velocity":0.8661417322834646},{"duration":0.1999999999999993,"name":"F5","time":8.799999999999999,"velocity":0.8661417322834646},{"duration":0.1999999999999993,"name":"F5","time":8.999999999999998,"velocity":1},{"duration":0.12916666666666643,"name":"F5","time":9.199999999999998,"velocity":1},{"duration":0.1349999999999998,"name":"F#5","time":9.329166666666664,"velocity":1},{"duration":0.13333333333333286,"name":"G#5","time":9.466666666666663,"velocity":1},{"duration":0.2916666666666661,"name":"A#5","time":9.599999999999996,"velocity":1},{"duration":0.09166666666666679,"name":"F#4","time":9.899999999999995,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"F#4","time":9.999999999999995,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"G#4","time":10.099999999999994,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"A#4","time":10.199999999999994,"velocity":0.8661417322834646},{"duration":0.09166666666666679,"name":"C5","time":10.299999999999994,"velocity":0.8661417322834646},{"duration":0.19166666666666643,"name":"C#5","time":10.399999999999993,"velocity":0.8661417322834646},{"duration":0.13083333333333336,"name":"A#5","time":10.52916666666666,"velocity":1},{"duration":0.125,"name":"A#5","time":10.666666666666659,"velocity":1},{"duration":0.125,"name":"A#5","time":10.799999999999992,"velocity":1},{"duration":0.13083333333333336,"name":"G#5","time":10.929166666666658,"velocity":1},{"duration":0.125,"name":"F#5","time":11.066666666666658,"velocity":1},{"duration":0.12916666666666643,"name":"G#5","time":11.19999999999999,"velocity":1},{"duration":0.125,"name":"F#5","time":11.466666666666656,"velocity":1},{"duration":0.13000000000000078,"name":"G#4","time":11.599999999999989,"velocity":0.8661417322834646},{"duration":0.1341666666666672,"name":"G#4","time":11.72999999999999,"velocity":0.8661417322834646},{"duration":0.13333333333333286,"name":"F#4","time":11.866666666666656,"velocity":0.8661417322834646},{"duration":0.2666666666666675,"name":"G#4","time":11.99999999999999,"velocity":0.8661417322834646},{"duration":0.13333333333333286,"name":"G#4","time":12.266666666666657,"velocity":0.8661417322834646},{"duration":0.13000000000000078,"name":"G#4","time":12.39999999999999,"velocity":0.8661417322834646},{"duration":0.1341666666666672,"name":"F#4","time":12.52999999999999,"velocity":0.8661417322834646},{"duration":0.13333333333333286,"name":"G#4","time":12.666666666666657,"velocity":0.8661417322834646},{"duration":0.19166666666666643,"name":"D#5","time":12.79999999999999,"velocity":1},{"duration":0.09166666666666679,"name":"D#5","time":12.99999999999999,"velocity":1},{"duration":0.09166666666666679,"name":"F5","time":13.099999999999989,"velocity":1},{"duration":0.7999999999999989,"name":"F#5","time":13.199999999999989,"velocity":1},{"duration":0.09999999999999964,"name":"F#4","time":13.399999999999988,"velocity":0.8661417322834646},{"duration":0.09999999999999964,"name":"G#4","time":13.499999999999988,"velocity":0.8661417322834646},{"duration":0.40000000000000036,"name":"A#4","time":13.599999999999987,"velocity":0.8661417322834646},{"duration":0.1999999999999993,"name":"F5","time":13.999999999999988,"velocity":1},{"duration":0.1999999999999993,"name":"D#5","time":14.199999999999987,"velocity":1},{"duration":0.19166666666666643,"name":"C#5","time":14.399999999999986,"velocity":1},{"duration":0.09166666666666679,"name":"C#5","time":14.599999999999985,"velocity":1},{"duration":0.09166666666666679,"name":"D#5","time":14.699999999999985,"velocity":1},{"duration":0.7999999999999989,"name":"F5","time":14.799999999999985,"velocity":1},{"duration":0.09999999999999964,"name":"F4","time":14.999999999999984,"velocity":0.8661417322834646},{"duration":0.09999999999999964,"name":"F#4","time":15.099999999999984,"velocity":0.8661417322834646},{"duration":0.40000000000000036,"name":"G#4","time":15.199999999999983,"velocity":0.8661417322834646},{"duration":0.19166666666666643,"name":"D#5","time":15.599999999999984,"velocity":1},{"duration":0.19166666666666643,"name":"C#5","time":15.799999999999983,"velocity":1},{"duration":0.10000000000000142,"name":"C5","time":15.999999999999982,"velocity":1},{"duration":0.09166666666666501,"name":"C5","time":16.199999999999985,"velocity":1},{"duration":0.09166666666666501,"name":"D5","time":16.299999999999983,"velocity":1},{"duration":0.8000000000000043,"name":"E5","time":16.39999999999998,"velocity":1},{"duration":0.10000000000000142,"name":"E4","time":16.59999999999998,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"F4","time":16.69999999999998,"velocity":0.8661417322834646},{"duration":0.1999999999999993,"name":"G4","time":16.799999999999983,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"G4","time":16.999999999999982,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"A4","time":17.099999999999984,"velocity":0.8661417322834646},{"duration":0.3999999999999986,"name":"G5","time":17.199999999999985,"velocity":1},{"duration":0.1999999999999993,"name":"C5","time":17.399999999999984,"velocity":0.8661417322834646},{"duration":0.12916666666666643,"name":"F5","time":17.599999999999984,"velocity":1},{"duration":0.0625,"name":"F4","time":17.799999999999983,"velocity":1},{"duration":0.0625,"name":"F4","time":17.899999999999984,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":17.999999999999986,"velocity":1},{"duration":0.0625,"name":"F4","time":18.199999999999985,"velocity":1},{"duration":0.0625,"name":"F4","time":18.299999999999986,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":18.399999999999988,"velocity":1},{"duration":0.0625,"name":"F4","time":18.599999999999987,"velocity":1},{"duration":0.0625,"name":"F4","time":18.69999999999999,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":18.79999999999999,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":18.99999999999999,"velocity":1},{"duration":0.2624999999999993,"name":"A#4","time":19.19999999999999,"velocity":1},{"duration":0.129999999999999,"name":"D4","time":19.599999999999987,"velocity":0.7480314960629921},{"duration":0.13416666666666544,"name":"D4","time":19.729999999999986,"velocity":0.7480314960629921},{"duration":0.13333333333333286,"name":"C4","time":19.866666666666653,"velocity":0.7480314960629921},{"duration":0.3000000000000007,"name":"D4","time":19.999999999999986,"velocity":0.7480314960629921},{"duration":0.09166666666666501,"name":"A#4","time":20.299999999999986,"velocity":1},{"duration":0.09166666666666501,"name":"A#4","time":20.399999999999984,"velocity":1},{"duration":0.09166666666666501,"name":"C5","time":20.499999999999982,"velocity":1},{"duration":0.09166666666666501,"name":"D5","time":20.59999999999998,"velocity":1},{"duration":0.09166666666666501,"name":"D#5","time":20.699999999999978,"velocity":1},{"duration":0.29166666666666785,"name":"F5","time":20.799999999999976,"velocity":1},{"duration":0.09166666666666501,"name":"A#4","time":21.099999999999977,"velocity":0.8661417322834646},{"duration":0.09166666666666501,"name":"A#4","time":21.199999999999974,"velocity":0.8661417322834646},{"duration":0.09166666666666501,"name":"C5","time":21.299999999999972,"velocity":0.8661417322834646},{"duration":0.09166666666666501,"name":"D5","time":21.39999999999997,"velocity":0.8661417322834646},{"duration":0.09166666666666501,"name":"D#5","time":21.499999999999968,"velocity":0.8661417322834646},{"duration":0.19166666666666643,"name":"F5","time":21.599999999999966,"velocity":0.8661417322834646},{"duration":0.1999999999999993,"name":"F5","time":21.799999999999965,"velocity":1},{"duration":0.125,"name":"F5","time":21.999999999999964,"velocity":1},{"duration":0.13083333333333158,"name":"F#5","time":22.12916666666663,"velocity":1},{"duration":0.125,"name":"G#5","time":22.26666666666663,"velocity":1},{"duration":1.1916666666666664,"name":"A#5","time":22.399999999999963,"velocity":1},{"duration":0.3916666666666657,"name":"C#6","time":23.599999999999962,"velocity":1},{"duration":0.3999999999999986,"name":"C6","time":23.99999999999996,"velocity":1},{"duration":0.6625000000000014,"name":"A5","time":24.39999999999996,"velocity":1},{"duration":0.3916666666666657,"name":"F5","time":25.19999999999996,"velocity":1},{"duration":1.1999999999999993,"name":"F#5","time":25.59999999999996,"velocity":1},{"duration":0.3916666666666657,"name":"A#5","time":26.799999999999958,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":27.199999999999957,"velocity":1},{"duration":0.8000000000000007,"name":"F5","time":27.599999999999955,"velocity":1},{"duration":0.3916666666666657,"name":"F5","time":28.399999999999956,"velocity":1},{"duration":1.1999999999999993,"name":"F#5","time":28.799999999999955,"velocity":1},{"duration":0.3916666666666657,"name":"A#5","time":29.999999999999954,"velocity":1},{"duration":0.12916666666666643,"name":"F4","time":30.399999999999952,"velocity":1},{"duration":0.7916666666666679,"name":"F5","time":30.79999999999995,"velocity":1},{"duration":0.3999999999999986,"name":"D5","time":31.59999999999995,"velocity":1},{"duration":1.2000000000000028,"name":"D#5","time":31.99999999999995,"velocity":1},{"duration":0.3916666666666657,"name":"F#5","time":33.19999999999995,"velocity":1},{"duration":0.3999999999999986,"name":"F5","time":33.59999999999995,"velocity":1},{"duration":0.7916666666666643,"name":"C#5","time":33.99999999999995,"velocity":1},{"duration":0.3916666666666657,"name":"A#4","time":34.79999999999995,"velocity":1},{"duration":0.19166666666666998,"name":"C5","time":35.199999999999946,"velocity":1},{"duration":0.09166666666666856,"name":"C5","time":35.39999999999995,"velocity":1},{"duration":0.09166666666666856,"name":"D5","time":35.49999999999995,"velocity":1},{"duration":0.8000000000000114,"name":"E5","time":35.59999999999995,"velocity":1},{"duration":0.10000000000000142,"name":"E4","time":35.799999999999955,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"F4","time":35.899999999999956,"velocity":0.8661417322834646},{"duration":0.20000000000000284,"name":"G4","time":35.99999999999996,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"G4","time":36.19999999999996,"velocity":0.8661417322834646},{"duration":0.10000000000000142,"name":"A4","time":36.29999999999996,"velocity":0.8661417322834646},{"duration":0.20000000000000284,"name":"A#4","time":36.39999999999996,"velocity":0.8661417322834646},{"duration":0.20000000000000284,"name":"C5","time":36.599999999999966,"velocity":0.8661417322834646},{"duration":0.12916666666666998,"name":"F5","time":36.79999999999997,"velocity":1},{"duration":0.0625,"name":"F4","time":36.99999999999997,"velocity":1},{"duration":0.0625,"name":"F4","time":37.09999999999997,"velocity":1},{"duration":0.12916666666666998,"name":"F4","time":37.199999999999974,"velocity":1},{"duration":0.0625,"name":"F4","time":37.39999999999998,"velocity":1},{"duration":0.0625,"name":"F4","time":37.49999999999998,"velocity":1},{"duration":0.12916666666666998,"name":"F4","time":37.59999999999998,"velocity":1},{"duration":0.0625,"name":"F4","time":37.79999999999998,"velocity":1},{"duration":0.0625,"name":"F4","time":37.899999999999984,"velocity":1},{"duration":0.12916666666666998,"name":"F4","time":37.999999999999986,"velocity":1},{"duration":0.12916666666666998,"name":"F4","time":38.19999999999999,"velocity":1},{"duration":1.6000000000000014,"name":"A#4","time":38.39999999999999,"velocity":1}];

// const recordingFirstNotes = recordingFirstNotes.tracks[0].notes;
// const recordingFirstNotes = [];

Store.recording.first.notes = recordingFirstNotes.tracks[0].notes;
Store.recording.second.notes = recordingSecondNotes.tracks[0].notes;

const recordingSecondNotes = [];

// console.log({recordingNotes});

const recordingPart = new Tone.Part(function(time, datum){
    // console.log(time);
    // console.log(datum);

    const instrMapped = generateInstrMetadata(datum.name);

    // instrMapped.color = '#008b8b'; // weird gray

    // instrMapped.originalPosition.z -= 20;

    // instrMapped.duration = datum.duration / 2;
<<<<<<< HEAD

    instrMapped.duration = datum.duration * 0.75;
=======
    instrMapped.duration = datum.duration * 2;

    instrMapped.variation = 'guitar';
>>>>>>> 6ea76e0... violin and guitar-acoustic assets, get Store.recording.first.notes from assets/recording folder json

    physics.addBody(true, Store.dropPosX, instrMapped, 0);

}, Store.recording.first.notes);
// }, recordingFirstNotes);      // twinkle twinkle little star
// }, recordingSecondNotes);  // bah bah black sheep
// }, recordingThirdNotes);  // alphabet song

// recordingPart.loop = true;
<<<<<<< HEAD
recordingPart.start("0:0:0");
=======

recordingPart.playbackRate = 0.9;
recordingPart.start("0:5:0"); // red notes
>>>>>>> f15a1c6... recording pre reaper overhaul

const recordingSecondPart = new Tone.Part(function(time, datum){
    // console.log(time);
    // console.log(datum);

    const instrMapped = generateInstrMetadata(datum.name);

    // instrMapped.color = '#0000cd';
    instrMapped.color = '#003366';

<<<<<<< HEAD
    // instrMapped.originalPosition.z += 20;

    // instrMapped.duration = datum.duration / 2;
=======
    // instrMapped.originalPosition.z += 15;
    instrMapped.originalPosition.z -= 5;
    // instrMapped.originalPosition.z += 8;

    // instrMapped.duration = datum.duration / 2;
    instrMapped.duration = datum.duration * 2;

    // instrMapped.variation = 'sample';
    instrMapped.variation = 'violin';
>>>>>>> 6ea76e0... violin and guitar-acoustic assets, get Store.recording.first.notes from assets/recording folder json

    physics.addBody(true, Store.dropPosX, instrMapped, 0);

}, recordingSecondNotes);  // bah bah black sheep

<<<<<<< HEAD
// recordingSecondPart.loop = true;
// recordingSecondPart.start("0:0:0");
=======
// // recordingSecondPart.loop = true;
// recordingSecondPart.start("0:0:0");
// recordingSecondPart.start("4:0:0"); // little too early
// recordingSecondPart.start("4:4:0"); // decent
// recordingSecondPart.start("5:0:0"); // too late

recordingSecondPart.playbackRate = 0.9;
// recordingSecondPart.start("0:0:0"); 
<<<<<<< HEAD
recordingSecondPart.start("2:16:0");
>>>>>>> f15a1c6... recording pre reaper overhaul
=======
// recordingSecondPart.start("2:16:0"); // TODO: change to ticks or seconds

// recordingSecondPart.start(0);
// recordingSecondPart.start(27.5); // little early

recordingSecondPart.start(28.85);
// recordingSecondPart.start(29.0);
>>>>>>> 6ea76e0... violin and guitar-acoustic assets, get Store.recording.first.notes from assets/recording folder json
