import {Link} from "react-router-dom"
import React from "react"

export default function StartPage(props){
    
    console.log(props)

    return(
        <div className="container">
            <p>Enter Your Name : </p>
            <input value={props.fullName} onChange={(text) => props.setFullName(text.target.value)} type="text" placeholder="Ex. John Smith" />
            <Link to="./quiz">Start Quiz</Link>
        </div>
    )
}