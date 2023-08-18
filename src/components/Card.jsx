import "../styles/Card.css";

function Card({userName, userAge,userDiscription}) {
    
    // const cardset = arr.map((num) = > {console.log("s");})
    return (
        <div className="card-bg">
            <div className="card-no" >{userName}</div>
            <div className="card-text">{userAge}</div>
            
            <div className="card-discription">{userDiscription}</div>
        </div>
    );
}

export default Card;