//import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import BotCollection from './components/BotCollection';
import BotArmy from './components/YourBotArmy';

function App() {
  const [bots,setBot]=useState([])
  const [army,setArmy]=useState([])
  
  useEffect(() => {
    fetch("https://api.npoint.io/2c35216e5786f776549f" )
       .then(res => res.json())
       .then(data => setBot(data.bots))
  },[])

//   function filterArmy(id){
         
//     const myArmy= bots.filter((bot)=>{
//         return bot.id === id
//     })
//     setBot(myArmy)
//  }

  return (
     (
    <div className='app-cont'>
       <div className='top'>
      <BotArmy bots={bots} army={army} 
      setArmy={setArmy}/>
     </div>
     <div className="top">
      <BotCollection bots={bots} setBot={setBot} 
      setArmy={setArmy} army={army} />
    </div>
    </div>
    )
  );
}

export default App;
