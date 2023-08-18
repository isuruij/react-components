import { useState } from "react";

function ShoppingItem() {
    const [count, setCount] = useState(0);


    function addCount() {
        setCount(count + 1);
    }

    function minCount() {
        setCount(count - 1);
    }

    return (
        <div style={{ marginLeft: "40%", marginTop: "10%" }}>
            <div
                style={{
                    backgroundColor: "lightpink",
                    borderRadius: "10px",
                    display: "flex",
                    border: "1px solid black",
                    width: "30vw",
                    padding: "8px",

                }}
            >
                <div style={{ marginLeft: "5%" }}>
                    <img
                        style={{ borderRadius: "10px" }}
                        src="https://picsum.photos/200"
                        width={"160px"}
                        height={"145px"}
                        alt="shopingItem"
                    />
                </div>
                <div style={{ marginLeft: "10px" }}>
                    <h2 style={{ marginTop: "0" }}>Item Name</h2>
                    <h2 style={{ fontWeight: "300" }}>{count <= 10 ? count + " Items added !" : "Out of Stock"}</h2>
                    <div style={{ display: "flex" }}>
                        <button
                            onClick={addCount}
                            style={{
                                borderRadius: "10px",
                                padding: "10px",
                                backgroundColor: "green",
                                border: "none",
                                color: "white",
                            }}
                            disabled={count === 11 ? true : false}
                        >
                            Add
                        </button>
                        <button
                            onClick={minCount}
                            style={{
                                borderRadius: "10px",
                                marginLeft: "0.5em",
                                padding: "10px",
                                backgroundColor: count === 0 ? "lightgray" : "red",
                                border: "none",
                                color: "white",
                            }}
                            disabled={count === 0 ? true : false}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingItem;
