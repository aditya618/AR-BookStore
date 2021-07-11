import React from "react";

import "../Style/Card.css";



const Card = (props) =>{

    
    return(
        <div class = "card">
         <img   src = {props.book1.bookImage}/>
        </div>
    )
}


export default Card;
