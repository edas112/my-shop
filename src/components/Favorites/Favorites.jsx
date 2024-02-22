import React, { useContext } from 'react';

// components
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function Favorites() {
  const { favoriteData } = useContext(AppContext);
  console.log(favoriteData);
  return (
    <main className="main-conteiner">
      {favoriteData.map((item) => {
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
