import React from "react";

function BotArmy({army,setArmy}){

  const handleClick = (bot) => {
    setArmy(army.filter((botInArmy) => botInArmy.id !== bot.id));
  }

    return <div>
        <h1>Your Bot Army</h1>
      {army.map((bot) => (
        <div key={bot.id}
          onClick={() => handleClick(bot)}> 
        <img src={bot.avatar_url} alt={bot.name}/>
        <div >
          <h2>{bot.name}</h2>
          <p>{bot.catchphrase}</p>
          </div>
        </div>
      ))} 
    </div>
}

export default BotArmy