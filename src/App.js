import divider from "./images/pattern-divider-desktop.svg"
import btn from "./images/icon-dice.svg"
import {useState,useEffect} from 'react'
function App() {

  const [text,setText]=useState([])
  const fetchdetails = async()=>{
    const res=await fetch("https://api.adviceslip.com/advice")
    const data=await res.json()
    setText(data.slip)
  }
  useEffect(()=>{
    fetchdetails()
  },[])
  
  return (
    <div className="card">
      <p className="title">Advice# {text.id}</p>
      <div className="advice">{text.advice}</div>
      <img src={divider} alt="" class="divider_desktop"/>
      <button className="btn">

        <img  src={btn} onClick={fetchdetails} alt=""/>
      </button>
    </div>
  );
}

export default App;
