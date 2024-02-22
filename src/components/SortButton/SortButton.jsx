import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useLocation } from 'react-router-dom';

function SortButton() {
  const {
    data,
    setData,
    cardData,
    setCardData,
    favoriteData,
    setFavoriteData,
  } = useContext(AppContext);
  let location = useLocation();

  const sortData = (direction) => {
    switch (location.pathname) {
      case '/my-card':
        const sortedCard = cardData.toSorted((a, b) => {
          let fa = a.title.toLowerCase();
          let fb = b.title.toLowerCase();
          if (fa < fb) return direction === 'a, z' ? -1 : 1;

          if (fa > fb) return direction === 'a, z' ? 1 : -1;

          return 0;
        });

        setCardData(sortedCard);
        break;

      case '/favorite':
        const sortedFavorite = favoriteData.toSorted((a, b) => {
          let fa = a.title.toLowerCase();
          let fb = b.title.toLowerCase();
          if (fa < fb) return direction === 'a, z' ? -1 : 1;

          if (fa > fb) return direction === 'a, z' ? 1 : -1;

          return 0;
        });

        setFavoriteData(sortedFavorite);
        break;

      default:
        const sortedData = data.toSorted((a, b) => {
          let fa = a.title.toLowerCase();
          let fb = b.title.toLowerCase();
          if (fa < fb) return direction === 'a, z' ? -1 : 1;

          if (fa > fb) return direction === 'a, z' ? 1 : -1;

          return 0;
        });
        setData(sortedData);
        break;
    }
  };

  return (
    <main className="main-conteiner">
      <div className="action-btn">
        <button
          onClick={() => {
            sortData('a, z');
          }}
        >
          Sort A-Z
        </button>
        <button onClick={sortData}>Sort Z-A</button>
      </div>
    </main>
  );
}

export default SortButton;
