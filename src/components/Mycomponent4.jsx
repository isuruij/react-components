// About useEffect

import { useState, useEffect } from "react";


function Mycomponent4() {

    const [bodyText, setbodyText] = useState("default");
    const [numberof, setnumberof] = useState(0);

    useEffect(() => {
        setnumberof(numberof);
        console.log("workking");
    },[bodyText]);


    return (<div>

        <div>
            <button onClick={() => { setbodyText("home"); }}>home</button>
            <button onClick={() => { setbodyText("about"); }}>about</button>
            <button onClick={() => { setbodyText("contact"); }}>contact</button>
            <h3>{bodyText}</h3>
            <h3>Current value of useEffect function :{numberof}</h3>



        </div>
    </div>);
}

export default Mycomponent4;