import React from "react";

function Bots({bots,setBot,setArmy,army}){

    const {id}=bots
    
     function handleDeleteBot(){
        const availableBots= bots.filter((bot)=>{
            return bot.id !== id 
        })
        setBot(availableBots)
     }
     function handleclick(bot){
        // if (!army.find((botInArmy) => botInArmy.id === bot.id)) {
        //     setArmy([...army, bot]);
        //   }
        if (!army.find((botInArmy) => (botInArmy.id === bot.id)))  {
            setArmy([...army, bot]);
          }
    }
      
    return (
        <div>
            <h1>Bot Collection</h1>
             {bots.map((bot)=>
    <div key={bot.id} className="card h-100" 
    onClick={()=>handleclick(bot)}>
        <img src={bot.avatar_url} alt={bot.name} className='card-img-top'/>
            <div className='card-body'>
            <h3 className='card-title'>{bot.name}</h3>
            <p className='card-text'>{bot.catchphrase}</p>
        <button onClick={handleDeleteBot}>X</button>
        </div>
     </div>)}
     </div>)
}

export default  Bots