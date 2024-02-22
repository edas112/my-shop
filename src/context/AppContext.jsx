import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';
export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cardData, setCardData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

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
