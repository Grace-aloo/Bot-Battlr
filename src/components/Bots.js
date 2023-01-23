import React from "react";

function Bots({id,name,avatar_url,catchphrase}){
    return <div key={id} className="card h-100">
    <img src={avatar_url} alt={name} className='card-img-top'/>
            <div className='card-body'>
            <h3 className='card-title'>{name}</h3>
            <p className='card-text'>{catchphrase}</p>
        <button>X</button>
        </div>
     </div>
}

export default  Bots