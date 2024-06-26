import { useState, useEffect } from "react";
import "./TestSearchPage.css"
import SearchForm from "../../components/SearchForm/SearchForm"; 
import { searchFlights } from "../../services/flights";
import { getAirports } from "../../services/airports";

const TestSearchPage = () => {
  const [flights, setFlights] = useState([]);
  const [airports, setAirports] = useState([]);
  const [dates, setDates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAirports();
        setAirports(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAirports();
  }, []);

  const bringFlights = async (origin, destination, date, returnDate) => {
    try {
      const data = await searchFlights(origin, destination, date, returnDate);
      setFlights(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const bringDates = async (origin, destination) => {
    try {
      const data = await flightDates(origin, destination); 
      setDates(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <p>SOY SEARCH FLIGHT</p>
      {error && <p>{error}</p>}
      {airports.length > 0 ? (
        <SearchForm
          airports={airports}
          bringFlights={bringFlights}
          bringDates={bringDates}
          dates={dates}
          flights={flights}
        />
      ) : (
        <p id="Loading">Loading airports...</p>
      )}
    </div>
  );
};

export default TestSearchPage;
