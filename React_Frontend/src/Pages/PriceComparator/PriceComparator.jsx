import CardRes from '../../components/CardResumen/CardRes';
import FlightCard from '../../components/FlightCard/FlightCard';
import HeaderResultados from '../../components/HeaderResultados/HeaderResultados';
import './PriceComparator.css';

function PriceComparator() {
  const exampleFlight = {
    arrivalAirport: {
      LocationId: 2,
      code: 'LHR',
      contactNumber: '+44 20 7355 3535',
      elevation: 25,
      id: 2,
      name: 'LPA',
      runwayCount: 2,
      runwayLength: 3660,
      hora: '11:30',
      terminalCount: 5,
      price: 50,
    },
    departureAirport: {
      LocationId: 2,
      code: 'LHR',
      contactNumber: '+44 20 7355 3535',
      elevation: 25,
      id: 2,
      name: 'Madrid',
      runwayCount: 2,
      runwayLength: 3660,
      hora: "12:30",
      terminalCount: 5,
      price: 25,
    },
    price: 100,
  };
  0;

  return (
    <div id="comparatorContent">
      <div id="flights">
        <div className="resultados">
          <div className="HrContainer">
            <HeaderResultados
              direction={'IDA'}
              departAirport={exampleFlight.departureAirport.name}
              ArriAirport={exampleFlight.arrivalAirport.name}
            />
          </div>

          <div className="flightsContainer">
            <FlightCard
              departCode={exampleFlight.departureAirport.code}
              arrivCode={exampleFlight.arrivalAirport.code}
              price={exampleFlight.price}
              departHour={exampleFlight.departureAirport.hora}
              arrivHour={exampleFlight.arrivalAirport.hora}
            />
          </div>
        </div>

        <div className="resultados">
          <div className="HrContainer">
            <HeaderResultados
              direction={'VUELTA'}
              departAirport={exampleFlight.arrivalAirport.name}
              ArriAirport={exampleFlight.departureAirport.name}
            />
          </div>

          <div className="flightsContainer">
            <FlightCard
              departCode={exampleFlight.departureAirport.code}
              arrivCode={exampleFlight.arrivalAirport.code}
              price={exampleFlight.price}
              departHour={exampleFlight.departureAirport.hora}
              arrivHour={exampleFlight.arrivalAirport.hora}
            />
          </div>
        </div>
      </div>

      <div id="ResumenContainer">
        <CardRes
          Name={exampleFlight.departureAirport.name}
          Name2={exampleFlight.arrivalAirport.name}
          Price={exampleFlight.departureAirport.price}
          Price2={exampleFlight.arrivalAirport.price}
        />
      </div>
    </div>
  );
}

export default PriceComparator;
