import React, { createContext, useContext, useState } from 'react';

const UITrackerContext = createContext();

export const UITrackerProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <UITrackerContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </UITrackerContext.Provider>
  );
};

const useUITracker = () => useContext(UITrackerContext);

export default useUITracker;
