import './CardRes.css'
import { useLocation,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';
import Button from "../Button/Button"


function CardRes({
  selectedId,
  priceOngoing,
  priceReturn,
  buttonClicked,
  setbuttonClicked,
}) {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);
  const [flightsReturnPrice, setFlightsReturnPrice] = useState();
  const [flightsOngoingPrice, setFlightsOngoingPrice] = useState();

  const seterPriceMoreThanCero = () => {
    console.log(buttonClicked);
    setbuttonClicked(false);
    if (priceOngoing > 0) {
      setFlightsOngoingPrice(priceOngoing);
    } else if (priceReturn > 0) {
      console.log('o');
      setFlightsReturnPrice(priceReturn);
    } else {
      return null;
    }
  };
  useEffect(() => {
    seterPriceMoreThanCero();
  }, [buttonClicked]);

  const bringFlight = async () => {
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
  };

  useEffect(() => {
    bringFlight();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div id="Resumen">
        <div id="Titulo">
          <h2>Resumen</h2>
        </div>
        <div id="Locations">
          ✈️{' '}
          {flightsOutGoing.map((flight) => (
            <p key={flight.id}>{flight.departureAirport.name}</p>
          ))}
          <p> ⟿⟿⟿</p>
          {flightsOutGoing.map((flight) => (
            <p key={flight.id}>{flight.arrivalAirport.name}</p>
          ))}
        </div>
        <div id="Suma">
          <p> Precio del vuelo de Ida es {flightsOngoingPrice} </p>
          <p>
            {' '}
            Precio del vuelo de Vuelta es
            {flightsReturnPrice}{' '}
          </p>
          <br /> <br />
          <p> Total = {flightsReturnPrice + flightsOngoingPrice}€ </p>
          <p>{selectedId}</p>
        </div>
        {flightsOutGoing.map((flight) => (
          <p key={flight.id}>
            <Button
              size="small"
              text="Take Flight"
              onClick={() => {
                navigate('/data');
              }}
            />
          </p>
        ))}
      </div>
    </>
  );
}

export default CardRes
