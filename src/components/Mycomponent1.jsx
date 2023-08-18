import { useNavigate } from "react-router-dom";
import "../styles/Mycomponent1.css";

function MyComponent1() {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2tag">First component </h2>
      <button onClick={()=>{navigate("/Mycomponent2")}}>Go component2</button>
      <button onClick={()=>{navigate("/ShoppingItem")}}>Go ShoppingItem</button>
      <button onClick={()=>{navigate(-1)}}>Go back</button>
    </div>
  );
}

export default MyComponent1;


