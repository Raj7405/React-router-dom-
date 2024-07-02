import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    setCurrentLocation(location);
  }, [location]);

  return (
    <LocationContext.Provider value={currentLocation}>
      {children}
    </LocationContext.Provider>
  );
};

export const useCustomLocation = () => useContext(LocationContext);
