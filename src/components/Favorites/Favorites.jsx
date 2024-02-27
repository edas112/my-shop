import React, { useContext, useState } from 'react';

// components
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function Favorites() {
  const [searchValue, setSearchValue] = useState('');
  const { favoriteData } = useContext(AppContext);
  console.log(favoriteData);
  return (
    <main className="main-conteiner">
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
      {favoriteData
        .filter(
          ({ title, description }) =>
            title.toLowerCase().includes(searchValue) ||
            description.toLowerCase().includes(searchValue.toLocaleLowerCase())
        )
        .map((item) => {
          return (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              buttonFunk={() => {}}
            />
          );
        })}
    </main>
  );
}

export default Favorites;
