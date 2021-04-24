import * as Tone from 'tone'
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

function generateSound(note) {
    synth.triggerAttack(note, Tone.now());
}

function stopSound(note) {
    synth.triggerRelease(note);
}

var soundFunctions = { generateSound, stopSound }
export default soundFunctions;