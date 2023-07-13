import {Link} from "react-router-dom"
import React,{useEffect,useContext} from "react"
import { AppContext } from "./App"

export default function End(props){
    
    const [score,setScore,reRender,setReRender,fullName] = useContext(AppContext)

    useEffect(() => {
        setReRender(true);
    },[])
    

    return(
        <div className="container">
            <h1>Quiz Finished</h1>
            <h2>{fullName!==""?fullName:"Unknown"} your score is : </h2>
            <h2>{score} /5</h2>
            <Link to="/">Restart Quiz</Link>
        </div>
    )
}