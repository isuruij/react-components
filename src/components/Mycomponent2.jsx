import {  useState } from "react";


function MyComponent2() {
    const [count, setCount] = useState(10);

    function handleclick() {

        if (count > 0) {
            setCount(count - 1);
        }
        if (count === 1) {
            setCount("OUT OF STOCK");
        }
    }
    return (
        <div>
            <h3>second component</h3>
            <button onClick={handleclick} > click </button>
            <h2 style={{ color: count > 3 ? "blue" : "red" }}>{count}</h2>
        </div>
    )
}

export default MyComponent2