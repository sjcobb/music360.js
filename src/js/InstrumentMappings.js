/*
 *** MAPPING METHODS ***
 */
/*jshint esversion: 6 */

//-----INIT INSTRUMENT MAPPING------//
//TODO: instrumentMapping obj should be part of getInstrumentMapping() so default params can be set for optional configs, ex: movement = 'physics'

export default class InstrumentMappings {

    constructor() {
        // super();
    }

    getInstrumentMappingTemplate(movement = 'physics') {
        //const instrumentMapping = {
        return {
            flameCenter: {
                type: 'animation',
                triggerOn: 2,
                timesTriggered: 0,
                originalPosition: { x: 0, y: 0, z: -5 }
            },
            hiHatClosed: {
                ballDesc: 'H',
                color: '#ff0000', //red
                keyInput: '1',
                // note: 'B', // N/A
                octave: 2, // N/A
                movement: movement, //default: 'physics', or 'static'
                type: 'drum',
                variation: 'hihat',
                originalPosition: { x: 0, y: 0, z: -3 }
            },
            hiHatOpen: {
                ballDesc: 'H+',
                color: '#990000', //dkred
                keyInput: '2',
                // note: 'B',
                octave: 2,
                // movement: 'static',
                type: 'drum',
                variation: 'hihat-open',
                originalPosition: { x: 0, y: 0, z: -3 }
            },
            snarePrimary: {
                ballDesc: 'S',
                color: '#FFFF00', //yellow
                keyInput: '3',
                // note: 'A',
                octave: 2,
                type: 'drum',
                variation: 'snare',
                originalPosition: { x: -3, y: 1.5, z: 1 }
                // originalPosition: { x: 0, y: 0, z: (globalStaffLineInitDrumZ + 5) }
            },
            kickPrimary: {
                // ballDesc: 'K', // beat-v1
                ballDesc: 'B',
                color: '#003366', //midnight blue
                keyInput: '4',
                // note: 'C',
                octave: 2,
                type: 'drum',
                variation: 'kick',
                originalPosition: { x: 0, y: 0, z: 5 }
            },
            crashPrimary: {
                ballDesc: 'Cr',
                // color: '#FFA500', //orange
                color: '#8B008B', //darkmagenta
                keyInput: '5',
                // note: 'C',
                octave: 2,
                type: 'drum',
                variation: 'crash', //aka clap
                originalPosition: { x: 0, y: 0, z: -4 }
            },
            ridePrimary: {
                ballDesc: 'R',
                color: '#FFD700', //gold
                // color: '#800080', //purple
                keyInput: '6',
                // note: 'C',
                octave: 2,
                type: 'drum',
                variation: 'ride',
                originalPosition: { x: 0, y: 0, z: -2 }
            },
            tomHigh: {
                ballDesc: 'T',
                // color: '#800080', //purple
                color: '#006400', //dkgreen
                keyInput: '7',
                // note: 'C',
                octave: 2,
                type: 'drum',
                variation: 'tom-high',
                originalPosition: { x: 0, y: 0, z: 0 }
            },
            sphereChordG1: {
                ballDesc: 'G',
                color: '#4B0AA1', //V - dkblue
                keyInput: '\\',
                note: 'G',
                octave: 1,
                chord: ['G1', 'B1', 'D1'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 15 }
            },
            sphereChordA1: {
                ballDesc: 'A',
                color: '#C6018B', //VI - pink (or: #BB0181)
                keyInput: 'Z',
                note: 'A',
                octave: 1,
                chord: ['A1', 'C2', 'E2'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 14 } //low
            },
            sphereChordB1: {
                ballDesc: 'B',
                color: '#FF872B', //VII - orange
                keyInput: 'X',
                note: 'B',
                octave: 1,
                chord: ['B1', 'D2', 'F2'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 13 } //low
            },
            sphereChordC2: {
                ballDesc: 'C',
                color: '#0018F9', //I - blue
                keyInput: 'C',
                note: 'C',
                octave: 2,
                chord: ['C2', 'E2', 'A2'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 12 } //low
            },
            sphereChordD2: {
                ballDesc: 'D',
                color: '#680896', //II - purple
                keyInput: 'V',
                note: 'D',
                chord: ['D2', 'F2', 'A2'],
                octave: 2,
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 11 }
            },
            sphereChordE2: {
                ballDesc: 'E',
                color: '#FF001F', //III - redorange
                keyInput: 'B',
                note: 'E',
                chord: ['E2', 'G2', 'B2'],
                octave: 2,
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 10 }
            },
            sphereChordF2: {
                ballDesc: 'F',
                color: '#006CFA', //IV - medblue
                keyInput: 'N',
                note: 'F',
                octave: 2,
                chord: ['F2', 'A2', 'C3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 9 }
            },
            sphereChordG2: {
                ballDesc: 'G',
                color: '#4B0AA1', //V - dkblue
                keyInput: 'M',
                note: 'G',
                octave: 2,
                chord: ['G2', 'B2', 'D3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 8 } //low G
            },
            sphereChordA2: {
                ballDesc: 'A',
                color: '#C6018B', //VI - pink
                keyInput: 'G',
                note: 'A',
                octave: 2,
                chord: ['A2', 'C3', 'E3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 7 }
            },
            sphereChordB2: {
                ballDesc: 'B',
                color: '#FF872B', //VII - orange
                keyInput: 'H',
                note: 'B',
                octave: 2,
                chord: ['B2', 'D3', 'F3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 6 }
            },
            sphereChordC3: {
                ballDesc: 'C',
                color: '#0018F9', //I - blue
                keyInput: 'J',
                note: 'C',
                octave: 3,
                chord: ['C3', 'E3', 'G3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 5 }
            },
            sphereChordD3: {
                ballDesc: 'D',
                color: '#680896', //II - purple
                keyInput: 'K',
                note: 'D',
                octave: 3,
                chord: ['D3', 'F3', 'A3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 4 }
            },
            sphereChordE3: {
                ballDesc: 'E',
                color: '#FF001F', //III - redorange
                keyInput: 'L',
                note: 'E',
                octave: 3,
                chord: ['E3', 'G3', 'B3'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 3 }
            },
            sphereChordF3: {
                ballDesc: 'F',
                color: '#006CFA', //IV - medblue
                keyInput: '[',
                note: 'F',
                octave: 3,
                chord: ['F3', 'A3', 'C4'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 2 }
            },
            sphereChordG3: {
                ballDesc: 'G',
                color: '#4B0AA1', //V - dkblue
                keyInput: ']',
                note: 'G',
                octave: 3,
                chord: ['G3', 'B3', 'D4'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 1 }
            },
            sphereChordA3: {
                ballDesc: 'A',
                color: '#C6018B', //VI - pink
                keyInput: 'G',
                note: 'A',
                octave: 3,
                chord: ['A3', 'C4', 'E4'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: 0 }
            },
            sphereChordB3: {
                ballDesc: 'B',
                color: '#FF872B', //VII - orange
                keyInput: 'H',
                note: 'B',
                octave: 3,
                chord: ['B3', 'D4', 'F4'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: -1 }
            },
            sphereChordC4: {
                ballDesc: 'C',
                color: '#0018F9', //I - blue
                keyInput: 'J',
                note: 'C',
                octave: 4,
                chord: ['C4', 'E4', 'G4'],
                type: 'chord',
                originalPosition: { x: 0, y: 0, z: -2 }
            },
        };
    }
    
    getInstrumentMapping(index, obj) {
        // return (obj.userData.opts.moveControl ? false : true);
        // return (value * this.notationConstants[providedUnits].digits);
        const instrumentMapping = this.getInstrumentMappingTemplate();
        return instrumentMapping[obj] ? instrumentMapping[obj] : globalLetterNumArr[index];
    }
    
    getKeyboardMapping(input) {
        const instrumentMapping = this.getInstrumentMappingTemplate();
        for (var key in instrumentMapping) {
            if (instrumentMapping.hasOwnProperty(key)) {
                if (input === instrumentMapping[key].keyInput) {
                    const instrumentMappedObj = instrumentMapping[key];
                    instrumentMappedObj.objName = key;
                    return instrumentMappedObj;
                }
            }
        }
    }
    
    getNoteMapping(obj) {
        const instrumentMapping = this.getInstrumentMappingTemplate();
        for (var key in instrumentMapping) {
            if (instrumentMapping.hasOwnProperty(key)) {
                // if (obj.userData.opts.ballDesc === instrumentMapping[key].ballDesc) { //keyInput is preferable to ballDesc since there should not be duplicates 
                if (obj.userData.opts.keyInput === instrumentMapping[key].keyInput) {
                    //TODO: are both getNoteMapping and getKeyboardMapping needed?
                    const instrumentMappedObj = instrumentMapping[key];
                    return instrumentMappedObj;
                }
    
            }
        }
    }

    getInstrByNote(inputNote = 'C4') {
        const instrumentMapping = this.getInstrumentMappingTemplate();
        for (var key in instrumentMapping) {
            if (instrumentMapping.hasOwnProperty(key)) {

                // const instrNote = obj.userData.opts.note + obj.userData.opts.octave;
                const instrNote = inputNote;
                // console.log({instrNote});
                const currNote = instrumentMapping[key].note + instrumentMapping[key].octave;
                // console.log({currNote});
                
                // if (instrNote === inputNote) {
                if (instrNote === currNote) {
                    //TODO: are both getNoteMapping and getKeyboardMapping needed?
                    const instrumentMappedObj = instrumentMapping[key];
                    // console.log({instrumentMappedObj});
                    return instrumentMappedObj;
                }
    
            }
        }
    }
}

