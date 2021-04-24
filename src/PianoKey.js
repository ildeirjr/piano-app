import './style.css'
import './Sound.js'
import soundFunctions from './Sound.js';
import React from 'react';

class PianoKey extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isPressed: false};
    }

    handleMouseUp() {
        this.setState({isPressed: false});
        soundFunctions.stopSound(this.props.note);
    }

    handleMouseDown() {
        this.setState({isPressed: true});
        soundFunctions.generateSound(this.props.note);
    }

    render(){
        return (
            <div className={this.state.isPressed ? "piano-key-pressed" : "piano-key"} onMouseDown={() => this.handleMouseDown()} onMouseUp={() => this.handleMouseUp()}>{this.props.note}</div>
        );
    }
}

export default PianoKey;