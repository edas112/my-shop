import React from 'react';
import { moskData } from '../../moskData';
// components
import Card from '../Card/Card';

import './Main.scss';

function Main() {
  return (
    <main className="main-conteiner">
      {moskData.map((item) => {
        return (
          <Card
            key={item.title}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        );
      })}
    </main>
  );
}

export default Main;
