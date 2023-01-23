import React from "react";

function Bots({id,name,avatar_url,catchphrase,bots,setBot}){
    
     function handleDeleteBot(){
        const availableBots= bots.filter((bot)=>{
            return bot.id !== id 
        })
        setBot(availableBots)
     }
    return <div key={id} className="card h-100">
        <img src={avatar_url} alt={name} className='card-img-top'/>
            <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>{catchphrase}</p>
        <button onClick={handleDeleteBot}>X</button>
        </div>
     </div>
}

export default  Bots