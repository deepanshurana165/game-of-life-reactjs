import React from 'react';

const Box = (props) => {
    const {col,row,selectBox,boxClass,boxID} = props;
    return (
        <div
            className={boxClass}
            id = {boxID}
            onClick={()=>{selectBox(row,col)}}
        />
    );
};

export default Box;
