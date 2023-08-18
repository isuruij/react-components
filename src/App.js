// import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Mycomponent1 from "./components/Mycomponent1";
import Mycomponent2 from "./components/Mycomponent2";
import Mycomponent3 from "./components/Mycomponent3";
import Mycomponent4 from "./components/Mycomponent4";
import Mycomponent5 from "./components/Mycomponent5";
import ShoppingItem from "./components/ShoppingItem";
import Mycomponent6 from "./components/Mycomponent6";
import Navbar from "./components/Navbar";

function App() {
  // const arr = [1, 2, 3, 4];
  // const cardArr = arr.map((num) => {
  //   return <Card key={num} cardNo={num} />;
  // });
  const userDetails = [
    {
      username: "kamal",
      age: 11,
      discription: "ccdknwoc wdocnw dncwo vciownvnw vwdenvinwp",
    },
    {
      username: "Namal",
      age: 21,
      discription: "ccdknwrpv rfovniownvnw vwdenvinwp",
    },
    {
      username: "samal",
      age: 12,
      discription: "ccdknwvfklesn  vwciownvnw vwdenvinwp",
    },
    {
      username: "Amal",
      age: 21,
      discription: "ccdknwoc wdocnw dncwo vciownvnw vwdenvinwp",
    },
    {
      username: "kamal",
      age: 99,
      discription: "ccdknwoc wdocnw dncwo vciownvnw vwdenvinwp",
    },
  ];

  const useDetailCards = userDetails.map((user) => {
    return (
      <Card
        userName={user.username}
        userAge={user.age}
        userDiscription={user.discription}
      />
    );
  });

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/MyComponent1" element={<Mycomponent1 />} />
        <Route path="/MyComponent2" element={<Mycomponent2 />} />
        <Route path="/MyComponent3" element={<Mycomponent3 Pname={"Kamal"} Page={"10"} />} />
        <Route path="/MyComponent4" element={<Mycomponent4 />} />
        <Route path="/MyComponent5" element={<Mycomponent5 />} />
        <Route path="/MyComponent6" element={<Mycomponent6 />} />
        <Route path="/cards" element={<div style={{ display: "flex", flexDirection: "row" }}>{useDetailCards}</div>} />
        <Route path="/ShoppingItem" element={<ShoppingItem />} />
      </Routes>
    </div>

  );
}

export default App;




{/* <MyComponent2 />
<ShoppingItem />
<Mycomponent3 Pname={"Kamal"} Page={"10"} />
<Mycomponent4 />
<div style={{ display: "flex", flexDirection: "row"}}>{useDetailCards}</div>
<Mycomponent5/>  */}