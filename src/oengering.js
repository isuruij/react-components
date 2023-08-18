
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Mycomponent1 from "./components/Mycomponent1";
import Mycomponent2 from "./components/Mycomponent2";
import Mycomponent3 from "./components/Mycomponent3";
import Mycomponent4 from "./components/Mycomponent4";
import Mycomponent5 from "./components/Mycomponent5";
import ShoppingItem from "./components/ShoppingItem";

function App() {

  return (
    <Routes>
      <Route path="/MyComponent1" element={<Mycomponent1 />}/>
      <Route path="/MyComponent2" element={<Mycomponent2 />}/>
      <Route path="/MyComponent3" element={<Mycomponent3 Pname={"Kamal"} Page={"10"} />}/>
      <Route path="/MyComponent4" element={<Mycomponent4 />}/>
      <Route path="/MyComponent5" element={<Mycomponent5 />}/>
      <Route path="/cards" element={<div style={{ display: "flex", flexDirection: "row"}}>{useDetailCards}</div>}/>
      <Route path="/ShoppingItem" element={<ShoppingItem />}/>
    </Routes>
    
  );
}

export default App;



<Routes>
    <Route path="/MyComponent1" element={<Mycomponent1 />}/>
    <Route path="/MyComponent2" element={<Mycomponent2 />}/>
    <Route path="/MyComponent4" element={<Mycomponent4 />}/>
    <Route path="/MyComponent5" element={<Mycomponent5 />}/>
</Routes>

