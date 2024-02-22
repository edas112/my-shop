import React, { useContext } from 'react';
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function MyCard() {
  const { cardData, removeFromCard } = useContext(AppContext);
  return (
    <main className="conteiner">
      {cardData.map(({ title, description, img }) => {
        return (
          <Card
            key={title}
            title={title}
            description={description}
            img={img}
            buttonFunk={removeFromCard}
            card={true}
          />
        );
      })}
    </main>
  );
}

export default MyCard;
