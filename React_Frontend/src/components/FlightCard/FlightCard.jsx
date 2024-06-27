import "./FlightCard.css"
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';
import Button from "../Button/Button"


function FlightCard() {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);
  const[getPrice,setGetPrice]=useState()

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
  const navigate = useNavigate()
  return (
         <div id="FlightCArd">
               {flightsOutGoing.map((flight) => (
          <li key={flight.id}>
            Code:{flight.code}
          </li>
          ))}
          {flightsOutGoing.map((flight) => (
              <li key={flight.id}>
                Date:{flight.departure_time.substr(0,10)}
              </li>
          ))}
          {flightsOutGoing.map((flight) => (
              <li key={flight.id}>
                Time:{flight.departure_time.substr(11,8)}
              </li>
          ))}
          {flightsOutGoing.map((flight) => (
              <li key={flight.id}>
                Price:{flight.price} €
              </li>
          ))}
          {flightsOutGoing.map((flight) => (
              <li key={flight.id}>
                <Button size="small" text="Take Flight" />
              </li>
          ))}
          
          
        </div>
      
  )
}

export default FlightCard
