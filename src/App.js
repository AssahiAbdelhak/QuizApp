
import './App.css';
import Quiz from "./Quiz";
import StartPage  from './StartPage';
import End from './End'
import {Routes, Route} from "react-router-dom"
import React,{useEffect,createContext,useState} from "react"

export const AppContext = createContext();

function App() {

  const [reRender,setReRender] = useState(false)
  const [data,setDate] = useState([])
  const [score,setScore] = useState(0);
  const [fullName,setFullName] = useState("")

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => {
        setDate(data)
        console.log("API IS CALLED")
        
    }
    )
},[reRender]) 

  return (
    <div className="App">
      <h1 className='title'>Quiz App</h1>
        <AppContext.Provider value={[score,setScore,reRender,setReRender,fullName]}>
          <Routes>
            <Route path='/' element={<StartPage fullName={fullName} setFullName={setFullName} />} />
            <Route path='/quiz' element={<Quiz data={data}/>} />
            <Route path='/end' element={<End />} />
          </Routes>
        </AppContext.Provider>
        
      
    </div>
  );
}

export default App;
