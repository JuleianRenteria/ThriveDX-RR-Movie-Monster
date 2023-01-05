import React from 'react'

function DisplayIdeas(props) {
    let crazyIdeas = props.ideas.map((idea, i) => <li key={i}>{idea}</li>)
    
    return (
        <div>
          <ul>
            {crazyIdeas}
          </ul>
    
        </div>
      )
}

export default DisplayIdeas 