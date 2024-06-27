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
  const [flightsReturnPrice, setFlightsReturnPrice] = useState(0);
  const [flightsOngoingPrice, setFlightsOngoingPrice] = useState(0);

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
    flightsOutGoing.length > 0 &&
      <div id="Resumen">
        <div id="Titulo">
          <h2>Booking</h2>
        </div>
        <div id="Locations">
          ✈️ {flightsOutGoing[0].departureAirport.name}
          <p> ⟿⟿⟿</p>
          {flightsOutGoing[0].arrivalAirport.name}
        </div>
        <div id="Suma">
          <p> Outbound Price: {flightsOngoingPrice} € </p>
          <p>
            {' '}
            Return Price: {flightsReturnPrice} €
          </p>
          <br/> <br/>
          <p> Total = {flightsReturnPrice + flightsOngoingPrice}€ </p>
        </div>
        <Button 
        size="small"
              text="Take Flight"
              onClick={() => {
                navigate('/data')
              }}
        />

      </div>
  );
}

export default CardRes
