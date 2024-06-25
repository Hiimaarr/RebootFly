import { searchFlights } from "../../services/flights";
import { getAirports } from "../../services/airports";
import { flighDates } from "../../services/flightDates";

import api from '.';

import { useState, useEffect } from "react";

const TestSearchPage = () => {

    const [flights, setFlights] = useState(null);
    const [airports, setAirports] = useState([]);
    const [dates, setDates] = useState([]);
    const [error, setError] = useState(null);

    const bringFlights = async (origin, destination, date, returnDate) => {
        try {
            const data = await searchFlights(origin, destination, date, returnDate);
            setFlights(data);
        } catch (error) {
            setError(error.message)
        }
    }

    const bringDates = async (origin, destination) => {
        try {
          const data = await flighDates(origin, destination);
          setDates(data);
        } catch (error) {
          setError(error.message);
        }
      };

      useEffect(() => {
        const bringAirports = async () => {
          try {
            const data = await getAirports();
            setAirports(data);
          } catch (error) {
            setError(error.message);
          }
        };
        getAirports();
      }, []);
      return (
        <div>
          {error && <p>{error}</p>}
          {airports.length > 0 ? (
            <TestSearchPage
              airports={airports}
              bringFlights={bringFlights}
              bringDates={bringDates}
              dates={dates}
              flights={flights}
            />
          ) : (
            <p>Loading airports...</p>
          )}
        </div>
      );
    };   
    export default TestSearchPage;