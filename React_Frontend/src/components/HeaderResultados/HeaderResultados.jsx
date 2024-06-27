import './HeaderResultados.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';

function HeaderResultados({direction,departAirport,arriAirport}) {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);

  const bringFlight = async () => {
    try {
      const flightsArr = await flightInfoToBack(Origen, Destino, idaDate, vueltaDate);
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
  };

  useEffect(() => {
    bringFlight();
  }, []);
  return (
    <>
      <div id="HeaderResultados">
      <p>{direction}</p>
      </div>
      <div id='siuu'>
        <p> {departAirport}</p>
        <p>{arriAirport}</p>
      </div>
      
    </>
  );
}

export default HeaderResultados;
