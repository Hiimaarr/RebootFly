import FlightCard from '../../components/FlightCard/FlightCard';
import HeaderResultados from '../../components/HeaderResultados/HeaderResultados';
import './PriceComparator.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';

function PriceComparator() {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;

  console.log(location.state);

  const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState({});
  const [flightsReturn, setFlightsReturn] = useState([]);
  const bringFlight = async () => {
    if (Origen) {
      try {
        const flightsArr = await flightInfoToBack(
          Origen,
          Destino,
          idaDate,
          vueltaDate
        );
        console.log(flightsArr);
        setFlights(flightsArr);

        /*   const result = flightsArr.outgoingFlights.map((viajes) => {
            return viajes.code
           })
            */

        setFlightsOutGoing(flightsArr.outgoingFlights);
      } catch {
        console.error('Error fetching flights:', error);
        setFlights({});
      }
    }
  };
  useEffect(() => {
    bringFlight();
  }, []);

  useEffect(() => {
    console.log(flightsOutGoing);
  }, [flightsOutGoing]);

  const info = () => {
    console.log(flights);

    if (flightsOutGoing.length > 0) {
      const result1 = flightsOutGoing.map((viajes) => {
        return viajes.code;
      });

      return result1;
    } else {
      return 'nada';
    }
  };


  return (
    <div id="comparatorContent">
      <div id="Resultados">
        <div id="HrContainer">
          <HeaderResultados />
        </div>
        <h1>hola</h1>

        {info()}

        {/* {flightsOutGoing[0].code} */}

        {/*  <div id="FlightsContainers">
          <ul>
            {flights.map((element) => (
              <li key={element.code}>
                {element.name} ({element.code})
              </li>
            ))}
          </ul>
          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div> */}
      </div>

      <div id="ResumenContainer"></div>
    </div>
  );
}

export default PriceComparator;
