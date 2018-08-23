import React, {Component} from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.css';

class Buttons extends Component {
    render() {
        return (
            <div className='center' style = {{marginTop: '10px'}}>
                <button className='waves-effect waves-light btn deep-orange darken-3' onClick={this.props.onPlayButton}>Play</button>
                <button className='waves-effect waves-light btn deep-orange darken-3' onClick={this.props.onPauseButton}>Pause</button>
                <button className='waves-effect waves-light btn deep-orange darken-3' onClick={this.props.onClearButton}>Clear</button>
                <button className='waves-effect waves-light btn deep-orange darken-3' onClick={this.props.fillTheGrid}>Seed</button>
            </div>
        );
    }
}

export default Buttons;

