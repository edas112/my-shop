import React from 'react';
import { mockData } from '../../mockData';
// components
import Card from '../Card/Card';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: mockData,
    };
  }
  render() {
    const { data } = this.state;

    const sortData = () => {
      const sortedData = data.sort((a, b) => {
        let fa = a.title.toLowerCase();
        let fb = b.title.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      this.setState({
        data: sortedData,
      });
    };
    return (
      <main className="main-conteiner">
        <div className="action-btn">
          <button onClick={sortData}>Sort A-Z</button>
        </div>
        {data.map((item) => {
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
}

export default Main;
