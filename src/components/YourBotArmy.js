import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faSkull,faShieldHalved } from '@fortawesome/free-solid-svg-icons'

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
          <span>
        <p><FontAwesomeIcon icon={faHeart} />{bot.health}</p>
        <p><FontAwesomeIcon icon={faSkull}/>{bot.damage}</p>
        <p><FontAwesomeIcon icon={faShieldHalved}/>{bot.armor}</p>
    </span>
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