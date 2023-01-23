import React from 'react';
import Bots from './Bots';

function BotCollection({bots,setBot,setArmy,army}){
    const botDisplay = // bots.map(bot => {
        //return ( 
        <Bots 
        // key={bot.id}
        // name={bot.name}
         //id={bot.id}
        // avatar_url={bot.avatar_url}
        // catchphrase={bot.catchphrase}
        bots={bots}
        setBot={setBot}
        setArmy={setArmy}
        army={army}
        />
       // )
//})
// function handleclick(bot){
//     if (!army.find((botInArmy) => botInArmy.id === bot.id)) {
//         setArmy([...army, bot]);
//       }
// }
     
    return (
        <div className='col-3 p-1'>
            {botDisplay}
        </div>
    )

}

export default BotCollection