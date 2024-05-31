import React, { useState } from 'react'


const Team = () => {

    const [team, setTeam] = useState(11);

    const handleadd = () => {
        const newteam= team +1;
        setTeam(newteam)
    }
    const handleremove =() =>{
        setTeam(team-1)
    }

    const teamStyle ={
        border: '2px solid red',
        margin: '15px'
       
    }

  return (
    <div style={teamStyle}>
      <h3>Players :{team} </h3>
      <button onClick={handleadd}>Add </button>
      <button onClick={handleremove}>Remove</button>
    </div>
    
  )
}

export default Team
