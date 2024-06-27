import './FlightCard.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';
import Button from '../Button/Button';

function FlightCard({ array, functionId, vuelo }) {
  /*  const location = useLocation(); */
  /* const { Origen, Destino, idaDate, vueltaDate } = location.state; */
  /* const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]); */

  /* const bringFlight = async () => {
    try {
      const flightsArr = await flightInfoToBack(
        Origen,
        Destino,
        idaDate,
        vueltaDate
      );
      setFlights(flightsArr);

      if (flightsArr.outgoingFlights && flightsArr.outgoingFlights.length > 0) {
        const resultOutGoing = flightsArr.outgoingFlights.map((viaje) => viaje);
        setFlightsOutGoing(resultOutGoing);
      }

      if (flightsArr.returnFlights && flightsArr.returnFlights.length > 0) {
        const resultReturn = flightsArr.returnFlights.map((viaje) => viaje);
        setFlightsReturn(resultReturn);
      }
      console.log(flightsArr);
    } catch (error) {
      console.error('Error fetching flights:', error);
      setFlights([]);
      setFlightsOutGoing([]);
      setFlightsReturn([]);
    }
  }; */

  /* useEffect(() => {
    bringFlight();
  }, []); */

  const objectFlight = (data) => {
    if (vuelo === 'Return') {
      functionId({ id: data.id, outgoing: 0, return:  data.price  });
    } else {
      functionId({ id: data.id, outgoing: data.price, return: 0 });
    }
  };

  return (
    <div style={{ width: '40vw', marginLeft: '140px' }}>
      {array.map((flight) => (
        <div id="FlightCard" key={flight.id}>
          <li key={flight.id}>{flight.code}</li>
          <li key={flight.id}>{flight.departure_time.substr(0, 10)}</li>
          <li key={flight.id}>{flight.departure_time.substr(11, 8)}</li>
          <li key={flight.id}>{flight.price} €</li>
          <Button
            size="small"
            text="Take Flight"
            onClick={() => {
              objectFlight({ id: flight.id, price: flight.price });
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default FlightCard;
