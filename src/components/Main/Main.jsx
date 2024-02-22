import React, { useContext } from 'react';

// components
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

import './Main.scss';

function Main() {
  const { data, addToCard } = useContext(AppContext);

  return (
    <main className="main-conteiner">
      {data.map((item) => {
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
