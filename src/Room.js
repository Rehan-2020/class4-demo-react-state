import React, { useState } from 'react';
import './Room.css';

function Room() {
    
    //const state = useState(true);
    //console.log("State = ", state);
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(33);
    let [temp, setTemp] = useState(22);

    //let hello = 'Hello '+ isLit + 'World';
    //let hello = 'Hello ${isLit} World';

    /*
    function increaseAge() {
        console.log("increase button clicked");
        setAge(++age);
    }
    */

    return (
    //<div className={"room "+(isLit? "lit" : "dark")}>
    <div className={`room ${isLit? "lit" : "dark"}`}>
        This is Room is {isLit? "lit": "dark"}
        <br/>
        <button onClick={()=> setLit(!isLit) } >Toggle light</button>
        <div class="divider" />
        <button onClick={ ()=> setLit(isLit = true)} > Turn light on</button>      
        <button onClick={ ()=> setLit(isLit = false)} > Turn light off</button> 
        <br/>
        <br/>
        Age = {age}
        <br/>
        <button onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setAge (++age);
                        }}>             
            Increase Age
        </button>
        <br/>
        <br/>


        Temperature = {temp}°C
        <br/>
        <button onClick={ ()=> setTemp(++temp)} >Increase temp</button> 
        <div class="divider" /> 
        <button onClick={ ()=> setTemp(--temp)} >decrease temp</button>
        
        <br/>

    </div>
    );
}

export default Room;
