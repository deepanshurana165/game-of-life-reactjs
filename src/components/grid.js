import React, {Component} from 'react';
import Box from './box';
import '../index.css';

class Grid extends Component {
    render() {
        const {cols,rows,gridFull,selectBox} = this.props;
        const width = cols*15;
        let rowsArr = [];
        let boxClass = '';
        for (let i = 0; i<rows ; i++){
            for (let j=0;j<cols;j++){
                let boxID = i+'_'+j;
                boxClass = gridFull[i][j]?'box on':'box off';
                rowsArr.push(
                    <Box
                        boxClass = {boxClass}
                        key = {boxID}
                        boxID = {boxID}
                        row = {i}
                        col={j}
                        selectBox={selectBox}
                    />
                )
            }
        }
        return (
            <div className='grid' style={{width: width}}>
               {rowsArr}
            </div>
        );
    }
}

export default Grid;

