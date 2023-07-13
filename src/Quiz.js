import Option from "./Option"
import React, {createContext,useEffect,useContext, useState} from 'react'
import {Link} from "react-router-dom"
import {decode} from "html-entities"
import {AppContext} from "./App"

export const Context = createContext();
const numberOfQuestion = 5;

export default function Quiz(props){

    const {results} = props.data;

    const [currentQuestion,setCurrentQuestion]  = useState(0)
    const [selectedOption,setSelectedOption] = useState("")
    
    const [score,setScore,...etc] = useContext(AppContext)
    
    useEffect(() => {
        setScore(currentQuestion===0?0:score);
    })
    

    const question = results[currentQuestion]
    const options = [question.correct_answer,...question.incorrect_answers].sort()

    console.log(question.question)
    function nextQuestion(){
        setCurrentQuestion(currentQuestion+1);
        setScore(selectedOption===question.correct_answer?score+1:score);
    }

    let option = options.map((option,index) => <Option key={index} value={option} onClick={setSelectedOption} />)

    return(
        <div className="container">
            <p>{decode(question.question)}</p>
            <div className="options">
                <Context.Provider value={[currentQuestion,selectedOption,setSelectedOption]}>

                    {option}
                    
                </Context.Provider>
                
            </div>
            {currentQuestion+1 === numberOfQuestion ? <Link to="/end"  onClick={() => nextQuestion()}>Finish Quiz</Link> : <button onClick={() => nextQuestion()}>Next Question</button>}
        </div>
    )
}
