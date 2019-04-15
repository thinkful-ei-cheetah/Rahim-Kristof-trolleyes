import React from 'react';
import '../card.css'

const Card=({title, content})=>(
  <div className="Card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
)

export default Card;