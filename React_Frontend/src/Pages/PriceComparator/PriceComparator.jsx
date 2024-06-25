import FlightCard from '../../components/FlightCard/FlightCard';
import HeaderResultados from '../../components/HeaderResultados/HeaderResultados';
import './PriceComparator.css';

function PriceComparator() {
  return (
    <div id="comparatorContent">
      <div id="Resultados">

        <div id="HrContainer">
          <HeaderResultados />
        </div>

        <div id="FlightsContainers">
          <FlightCard />
        </div>

      </div>

      <div id='ResumenContainer'>

      </div>
    </div>
  );
}

export default PriceComparator;
