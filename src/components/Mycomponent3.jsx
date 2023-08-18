// Mapping Example

function Mycomponent3({ Pname, Page }) {

    const list1 = [1, 2, 3, 4, 5, 6];
    // Multipication table using maping
    const list2 = list1.map((number) => <li key={number}>{number}*2={number * 2}</li>);

    return (<div>
        <div style={{ display: "flex" }}>
            <h3>Name : </h3>
            <h3>{Pname}</h3>
        </div>

        <div style={{ display: "flex" }}>
            <h3>Age : </h3>
            <h3>{Page}</h3>
        </div>

        <div>
            <ul>
                {list2}
            </ul>
        </div>



    </div>);
}

export default Mycomponent3;