import React, { useContext, useState } from 'react';

// components
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

import './Main.scss';

function Main() {
  const [searchValue, setSearchValue] = useState('');
  const { data, addToCard } = useContext(AppContext);

  return (
    <main className="main-conteiner">
      <div className="conteiner-input">
        <input
          type="text"
          placeholder="search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
          }}
        />
      </div>
      {data
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue)
        )
        .map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              buttonFunk={addToCard}
            />
          );
        })}
    </main>
  );
}

export default Main;
