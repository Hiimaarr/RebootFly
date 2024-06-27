import CardRes from '../../components/CardResumen/CardRes';
import FlightCard from '../../components/FlightCard/FlightCard';
import HeaderResultados from '../../components/HeaderResultados/HeaderResultados';
import './PriceComparator.css';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { flightInfoToBack } from '../../services/auth';

function PriceComparator() {
  const location = useLocation();
  const { Origen, Destino, idaDate, vueltaDate } = location.state;
  const [flights, setFlights] = useState([]);
  const [flightsOutGoing, setFlightsOutGoing] = useState([]);
  const [flightsReturn, setFlightsReturn] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [priceOngoing, setPriceOngoing] = useState();
  const [priceReturn, setPriceReturn] = useState();
  const [buttonClicked, setbuttonClicked] = useState(false);

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
  const stealId = (datos) => {
    setbuttonClicked(true);
    setSelectedId(datos.id);
    setPriceOngoing(datos.outgoing);
    setPriceReturn(datos.return);
  };

  console.log(flightsOutGoing);

  useEffect(() => {
    bringFlight();
  }, []);
  return (
    <div id="comparatorContent">
      <div id="flights">
        {/* Arrival */}

        {flightsOutGoing.length > 0 && (
          <div className="resultados">
            <div className="HrContainer">
              <HeaderResultados
                direction={'Outbound flight'}
                departAirport={flightsOutGoing[0].departureAirport.name}
                arriAirport={flightsOutGoing[0].arrivalAirport.name}
              />
            </div>

            <div className="flightsContainer">
              <FlightCard
                functionId={stealId}
                array={flightsOutGoing}
                vuelo="Outgoing"
              />
            </div>
          </div>
        )}

        {/* Departure */}

        {flightsOutGoing.length > 0 && (
          <div className="resultados">
            <div className="HrContainer">
              <HeaderResultados
                direction={'Return Flight'}
                departAirport={flightsOutGoing[0].arrivalAirport.name}
                arriAirport={flightsOutGoing[0].departureAirport.name}
              />
            </div>
            <div className="flightsContainer">
              {
                <FlightCard
                  functionId={stealId}
                  array={flightsReturn}
                  vuelo="Return"
                />
              }
            </div>
          </div>
        )}
      </div>

      {/* Total */}

      {flightsOutGoing.length > 0 &&
      <div id="ResumenContainer">
        <CardRes
          selectedId={selectedId}
          priceOngoing={priceOngoing}
          priceReturn={priceReturn}
          buttonClicked={buttonClicked}
          setbuttonClicked={setbuttonClicked}
        />
      </div>}
    </div>
  );
}

export default PriceComparator;
