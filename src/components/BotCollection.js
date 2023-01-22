import React from 'react';

function BotCollection({bots}){
    const botDisplay = bots.map(bot => {
        return ( 
        <div key={bot.id} className={bot.bot_class}>
            <img src={bot.avater_url} alt={bot.name}/>
            <h3>{bot.name}</h3>
            <p>{bot.catchphrase}</p>
             </div>
        )
})

    return (
        <div>
            {botDisplay}
        </div>
    )

}

export default BotCollection