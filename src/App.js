import logo from './logo.svg';
import './App.css';
import Keyboard from './Keyboard';
import soundFunctions from './Sound';

function App() {

  function handleKeyPress(event) {
    if (event.repeat)
      return;

    var pressedKey = event.keyCode;
    var pressedNote = '';

    switch (pressedKey) {
      case 65: // A
        pressedNote = 'C4';
        break;
      case 83: // S
        pressedNote = 'D4';
        break;
      case 68: // D
        pressedNote = 'E4';
        break;
      case 70: // F
        pressedNote = 'F4';
        break;
      case 71: // G
        pressedNote = 'G4';
        break;
      case 72: // H
        pressedNote = 'A4';
        break;
      case 74: // J
        pressedNote = 'B4';
        break;
      case 75: // K
        pressedNote = 'C5';
        break;
      case 76: // L
        pressedNote = 'D5';
        break;
      default:
        break;
    } 

    if(pressedNote){
      if(event.type === 'keydown')
        soundFunctions.generateSound(pressedNote);
      else if(event.type === 'keyup')
        soundFunctions.stopSound(pressedNote);
    }
  }

  document.addEventListener('keydown', handleKeyPress);
  document.addEventListener('keyup', handleKeyPress);

  return (
    <div>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
