import React, { createContext, useState } from 'react';
// Initiate Context
const RatingContext = createContext();
// Provide Context
export const RatingProvider = ({ children }) => {
  const [rating, setRating] = useState(0);
  return (
    <RatingContext.Provider value={{ rating, setRating }}>
      {children}
    </RatingContext.Provider>
  );
};

export default RatingContext;
