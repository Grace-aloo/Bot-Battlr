import React from "react";

function Bots({bots,setArmy,army,setBot}){

   // const {id}=bots
    
     function handleDeleteBot(bot){
        const availableBots= bots.filter((botinlist)=>{
            return botinlist.id !== bot.id 
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
        <div >
            <h1>Bot Collection</h1>
             {bots.map((bot)=>
    <div key={bot.id} className="cardy" >
        <div className="bot">
        <img src={bot.avatar_url} alt={bot.name}  
        onClick={()=>handleclick(bot)}/>
            {/* <div > */}
            <h3 >{bot.name}</h3>
            <p >{bot.catchphrase}</p>
        {/* </div> */}
       
        </div>
        <div>
                <button onClick={()=>handleDeleteBot(bot)}>X</button>
        </div>
     </div>
     )}
     </div>)
}

export default  Bots