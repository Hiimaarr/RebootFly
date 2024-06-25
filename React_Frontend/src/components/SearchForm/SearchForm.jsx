import { useState } from "react";

const SearchForm = ({ airports, bringFlights, bringDates }) => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    bringFlights(origin, destination, departureDate, returnDate);
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Origin:
        <select value={origin} onChange={handleOriginChange}>
          <option value="">Select origin...</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Destination:
        <select value={destination} onChange={handleDestinationChange}>
          <option value="">Select destination...</option>
          {airports.map((airport) => (
            <option key={airport.code} value={airport.code}>
              {airport.name} ({airport.code})
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          onChange={handleDepartureDateChange}
        />
      </label>
      <br />
      <label>
        Return Date:
        <input
          type="date"
          value={returnDate}
          onChange={handleReturnDateChange}
        />
      </label>
      <br />
      <button type="submit">Search Flights</button>
      <br />
    </form>
  );
};

export default SearchForm;