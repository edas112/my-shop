import React, { useState, createContext, useEffect } from 'react';

import { Await } from 'react-router-dom';
import { cfg } from './AppContext';
export const AppContext = createContext();
export { cfg } from '../cfg/cfg';

function AppContextProvider(props) {
  const [data, setData] = useState([]);
  const [cardData, setCardData] = useState(
    JSON.parse(localStorage.getItem('cardData')) || []
  );
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem('favoriteData')) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${cfg.API.HOST}/product`);
        console.log('response', response);
        const products = await response.json();
        console.log('data', products);
        const filteredData = products.filter(
          (item) => !cardData.some((cardItem) => cardItem.title === item.title)
        );
        setData(filteredData);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('cardData', JSON.stringify(cardData));
  }, [cardData]);

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
