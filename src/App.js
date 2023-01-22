//import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import BotCollection from './components/BotCollection';

function App() {
  const [bots,setBot]=useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/bots" )
       .then(res => res.json())
       .then(data => setBot(data))
  },[])

  return (
     (
    <div>
      <BotCollection bots={bots}/>
    </div>
    )
  );
}

export default App;
