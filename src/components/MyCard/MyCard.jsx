import React, { useContext, useState } from 'react';
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function MyCard() {
  const [searchValue, setSearchValue] = useState('');
  const { cardData, removeFromCard } = useContext(AppContext);
  return (
    <main className="conteiner">
      <div className="conteiner-input">
        <input
          type="text"
          placeholder="search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {cardData
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        .map(({ title, description, img }) => {
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
