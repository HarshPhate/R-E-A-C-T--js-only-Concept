import React from "react";
import './Card.css'

const Card =(props)=>{
    return(
        <>
        <div className="car"  style={{overflow: "hidden" }}>
        <img src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" alt="" width={333} style={{border: "2px solid black"}}></img>
         <h1>{props.tittle} </h1>
         <p>{props.description}</p>
        </div>
        </>
    
    )
}

export default Card;