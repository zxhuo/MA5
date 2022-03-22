import Ract, { useState } from 'react'
import './Box.css'

function Box(props) {
    const [backgroundColor, setBackgroundColor] = useState("white");

    function changeBackgroundColor(){
        if(backgroundColor === "white"){
            props.onWhiteCheck(props.times+1);
            setBackgroundColor("black");
        }else{
            props.onWhiteCheck(props.times-1);
            setBackgroundColor("white");
        }
    }

    return (
        <div className={backgroundColor === "white" ? 'box-white' : 'box-black'} onClick={() => changeBackgroundColor()} >
        </div>
    );
}

export default Box;