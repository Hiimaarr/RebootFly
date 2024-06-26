import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchFlights = async (origin, destination, date, returnDate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `/api/flights?origin=${origin}&destination=${destination}&date=${date}&returnDate=${returnDate}`
      );
      const data = await response.json();
      setFlights(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <FlightContext.Provider value={{ flights, searchFlights, loading, error }}>
      {children}
    </FlightContext.Provider>
  );
};
