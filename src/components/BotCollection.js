import React from 'react';
import Bots from './Bots';

function BotCollection({bots}){
    const botDisplay = bots.map(bot => {
        return ( 
        <Bots 
        key={bot.id}
        name={bot.name}
        id={bot.id}
        avatar_url={bot.avatar_url}
        catchphrase={bot.catchphrase}/>
        )
})
     function filterArmy(){
         
        const myArmy= bots.filter((bot)=>{
            return bot.id === id
        })
     }

    return (
        <div className='col-3 p-1'>
            {botDisplay}
        </div>
    )

}

export default BotCollection