import Ract, { useState } from 'react'
import Box from './Box.jsx'
import './Container.css'



function Container() {

    const[times, setTimes] = useState(0);

    return (
        <div>
            <div className="text">
                <h1>Count: {times}</h1>
            </div> 
            <div className='box-container'>
                <Box onWhiteCheck={(time) => setTimes(time)} times = {times}/>
                <Box onWhiteCheck={(time) => setTimes(time)} times = {times}/>
                <Box onWhiteCheck={(time) => setTimes(time)} times = {times}/>
                <Box onWhiteCheck={(time) => setTimes(time)} times = {times}/>
            </div>
        </div>
    );
}

export default Container;