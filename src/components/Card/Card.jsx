import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Card.scss';
import { AppContext } from '../../context/AppContext';

function Card({ title, description, img, card, buttonFunk }) {
  const { favoriteData, removeFromFavorite, addToFavorite } =
    useContext(AppContext);

  const isFavorite = favoriteData.some((item) => item.title === title);
  return (
    <div className="card">
      <FontAwesomeIcon
        icon={faHeart}
        className={`"favorte-icon" ${isFavorite ? 'favorite-icon-active' : ''}`}
        onClick={() => {
          isFavorite
            ? removeFromFavorite({ title, description, img })
            : addToFavorite({ title, description, img });
        }}
      />
      <h3>
        {title}
        {img}
      </h3>
      <p>{description}</p>
      <button
        onClick={() => {
          buttonFunk({ title, description, img });
        }}
      >
        {card ? 'remove from card' : 'add to card'}
      </button>
    </div>
  );
}

export default Card;
