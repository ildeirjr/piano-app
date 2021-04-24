import PianoKey from './PianoKey'

function Keyboard() {
    return (
        <div className="keyboard">
            <PianoKey note="C4"></PianoKey>
            <PianoKey note="D4"></PianoKey>
            <PianoKey note="E4"></PianoKey>
            <PianoKey note="F4"></PianoKey>
            <PianoKey note="G4"></PianoKey>
            <PianoKey note="A4"></PianoKey>
            <PianoKey note="B4"></PianoKey>
            <PianoKey note="C5"></PianoKey>
            <PianoKey note="D5"></PianoKey>
            <PianoKey note="E5"></PianoKey>
        </div>
    );
}

export default Keyboard;