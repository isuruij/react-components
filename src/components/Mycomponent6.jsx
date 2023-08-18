import { useState } from "react";
import axios from "axios";

function Mycomponent6() {

    const [text,settext] = useState();
    axios.get("https://api.restful-api.dev/objects").then((response) => {
    console.log(response.data[0].name);
    settext(response.data[0].name)
}).catch((error) => { console.log(error) });

    return ( <div>{text}</div> );
}

export default Mycomponent6;

