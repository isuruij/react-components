


// ABOUT USESTATE USEEFFECT MAPPING 


import { useState, useEffect } from "react";
import "../styles/Mycomponent5.css"

import "../styles/Card.css"
import Card from "./Card.jsx";



function Mycomponent5() {

    const [count, setcount] = useState(1);
    const list1 = [1, 2, 3, 4, 5, 6];
    const list2 = list1.map((number) => { return (number * 100) });
    console.log(list2);

    useEffect(() => { console.log("working") }, [count]);

    function handleclick(params) {
        setcount(count + 1);
    }



    const userDetails = [
        {
            username: "kamal",
            age: 11,
            discription: "ccdknwoc wd ojrj cnw dncwo vciownvnw vwdenvinwp",
        },
        {
            username: "Nimal",
            age: 21,
            discription: "cctj g tjjtr vwdenvinwp",
        },
        {
            username: "Aamal",
            age: 12,
            discription: "cc  dknjcg mgngwcio wnvnw vwdenvinwp",
        },
        {
            username: "sunil",
            age: 21,
            discription: "ccdknwoc wdocnw dncwo vciownvnw vwdenvinwp",
        },

    ];

    const cardset = userDetails.map((user) => { return <Card userName={user.username} userAge={user.age} userDiscription={user.discription}></Card> })

    


    return (<div>
       
        <h1 className="component5h1">{count}</h1>
        <button onClick={handleclick}>Click Me</button>
        <div style={{ display: "flex", flexDirection: "row" }}>{cardset}</div>

    </div>);
}

export default Mycomponent5;