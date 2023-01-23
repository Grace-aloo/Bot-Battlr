//import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBot]=useState([])
  const [army,setArmy]=useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/bots" )
       .then(res => res.json())
       .then(data => setBot(data))
  },[])

//   function filterArmy(id){
         
//     const myArmy= bots.filter((bot)=>{
//         return bot.id === id
//     })
//     setBot(myArmy)
//  }

  return (
     (
    <div>
      <BotArmy bots={bots} army={army} 
      setArmy={setArmy}/>
      <BotCollection bots={bots} setBot={setBot} 
      setArmy={setArmy} army={army} />
    </div>
    )
  );
}

export default App;
