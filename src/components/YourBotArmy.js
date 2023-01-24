import React from "react";

function BotArmy({army,setArmy}){

  const handleClick = (bot) => {
    setArmy(army.filter((botInArmy) => botInArmy.id !== bot.id));
  }

  // function handleDelete(bot){
  //   setArmy(army.filter((botInArmy) => botInArmy.id !== bot.id));

  // }

    return <div>
    <div >
        <h1>Your Bot Army</h1>
        <div  >
           {army.map((bot) => (
        <div key={bot.id} className="cardy" > 
          <div onClick={() => handleClick(bot)} >
        <img  src={bot.avatar_url} alt={bot.name}/>
        {/* <div  > */}
          <h2 >{bot.name}</h2>
          <p >{bot.catchphrase}</p>
          {/* </div> */}
         
          </div>
          {/* <div>
          <button onClick={() => handleDelete(bot)}>x</button>
          </div> */}
        </div>
      ))} 
      </div>
    </div>
    </div>
}

export default BotArmy