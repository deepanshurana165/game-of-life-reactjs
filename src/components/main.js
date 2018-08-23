import React, {Component} from 'react';
import Grid from './grid';
import Buttons from './buttons';


class Main extends Component {
    speed = 100;
    rows = 30;
    cols = 50;
    state = {
        generation: 0,
        // gridFull: Array(this.rows).fill(Array(this.cols).fill(false))
        gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    };

    helperFunctionCloneArray = (arr)=>{
        return JSON.parse(JSON.stringify(arr));
    };

    selectBox = (row,col)=>{
        let gridCopy = this.state.gridFull.slice(0);
        gridCopy[row][col] =!gridCopy[row][col];
        this.setState({
            gridFull: gridCopy
        })

    };

    fillTheGrid = ()=>{
        let gridCopy = this.helperFunctionCloneArray(this.state.gridFull);
        for (let i=0;i<this.rows;i++){
            for (let j=0;j<this.cols;j++){
                if (Math.floor(Math.random()*5)===1) {
                    gridCopy[i][j] = true;
                }
            }
        }
        this.setState({
            gridFull: gridCopy
        });
    };

    play = ()=>{
        let g = this.state.gridFull;
        let g2 = this.helperFunctionCloneArray(this.state.gridFull);
        for (let i=0;i<this.rows;i++){
            for (let j=0;j<this.cols;j++) {
                let neighbours = 0;
                if (i > 0 && j > 0) if (g[i - 1][j - 1]) neighbours++;
                if (i > 0) if (g[i - 1][j]) neighbours++;
                if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) neighbours++;
                if (j > 0) if (g[i][j - 1]) neighbours++;
                if (j < this.cols - 1) if (g[i][j + 1]) neighbours++;
                if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) neighbours++;
                if (i < this.rows - 1) if (g[i + 1][j]) neighbours++;
                if (i < this.rows - 1 && j < this.cols - 1) if (g[i + 1][j + 1]) neighbours++;
                if (g[i][j] && (neighbours < 2 || neighbours > 3)) g2[i][j] = false;
                if (!g[i][j] && neighbours === 3) g2[i][j] = true;
            }
        }
        this.setState({
            gridFull: g2,
            generation: this.state.generation+1
        })
    };

    onPlayButton = ()=>{
        clearInterval(this.id);
        this.id = setInterval(this.play,this.speed);
    };

    onPauseButton = ()=>{
        clearInterval(this.id);
    };

    onClearButton = ()=>{
        clearInterval(this.id);
        this.setState({
            gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false)),
            generation: 0
        });
        console.log('clear ran');
    };

    componentDidMount(){
        this.fillTheGrid();
    }

    render(){
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-4">
                        <span className='center'><h5>Game of Life</h5></span>
                    </div>
                </nav>
                <Buttons
                    onPlayButton = {this.onPlayButton}
                    onPauseButton = {this.onPauseButton}
                    onClearButton = {this.onClearButton}
                    fillTheGrid={this.fillTheGrid}
                />
                <Grid
                    gridFull={this.state.gridFull}
                    rows = {this.rows}
                    cols = {this.cols}
                    selectBox = {this.selectBox}
                />
                <div className='center'>
                    <div className="card-panel orange darken-3 white-text center-align"><h6>Generations: {this.state.generation}</h6></div>
                </div>
            </div>
        );
    }
}

export default Main;