import React, { useState, createContext, useEffect } from 'react';
import { mockData } from '../mockData';
export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem('data')) || mockData
  );
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem('favoriteData')) || []
  );

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
    localStorage.setItem('cardData', JSON.stringify(cardData));
  }, [data, cardData]);

  useEffect(() => {
    localStorage.setItem('favoriteData', JSON.stringify(favoriteData));
  }, [favoriteData]);

  const addToCard = (item) => {
    setCardData([...cardData, item]);
    const filteredData = data.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setData(filteredData);
  };

  const removeFromCard = (item) => {
    setData([...data, item]);

    const filteredData = cardData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setCardData(filteredData);
  };

  const addToFavorite = (items) => {
    setFavoriteData([...favoriteData, items]);
  };
  const removeFromFavorite = (item) => {
    const filteredfavoriteData = favoriteData.filter(
      (dataItem) => dataItem.title !== item.title
    );
    setFavoriteData(filteredfavoriteData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        addToFavorite,
        removeFromFavorite,
        cardData,
        setCardData,
        favoriteData,
        setFavoriteData,
        addToCard,
        removeFromCard,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
