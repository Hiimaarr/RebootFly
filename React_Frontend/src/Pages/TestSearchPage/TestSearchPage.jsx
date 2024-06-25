import { searchFlights } from "../../services/flights";
import { getAirports } from "../../services/airports";
import { flighDates } from "../../services/flightDates";

import api from '.';

import { useState, useEffect } from "react";

const TestSearchPage = () => {

    const [fights, setFlights] = useState(null);
    const [airports, setAirports] = useState([]);
    const [dates, setDates] = useState([]);
    const [error, setError] = useState(null);

    const bringFlights = async () => {
        try {
            const data = await searchFlights(origin, destination, date, returnDate);
            setFlights(data);
        } catch (error) {
            setError(error.message)
        }
    }

    const fetchDates = async (origin, destination) => {
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
    
    
}