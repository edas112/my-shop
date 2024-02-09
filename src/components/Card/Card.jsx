import React from 'react';
import './Card.scss';
function Card({ title, description, img }) {
  return (
    <div className="card">
      <h3>
        {title}
        {img}
      </h3>
      <p>{description}</p>
      <button>add to card</button>
    </div>
  );
}

export default Card;
