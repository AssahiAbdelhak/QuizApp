import React , {useContext} from "react"
import { Context }from "./Quiz"

export default function Option(props){

    const [currentQuestion,selectedOption,setSelectedOption] = useContext(Context)

    function updateAnswers(){
        setSelectedOption(props.value);
        
    }

// il fzut enlever k'idee de tableau contenant toutes les reponses 
// il faut le remplacer par une variable contenant la reponse 
// et qu'on va comparer des qu'on clique sur le button si 
// c'est la bonne reponse on augmente une state de score
// sinon on fait rien


    return(
        <>
            <input className="radio" type="radio" id="val1" name="response" value="val1" />
            <label htmlFor="val1" className={props.value === selectedOption ? "active" : "" } onClick={() => updateAnswers()}>{props.value}</label>
        </>
    )
}