import FlightCard from "../../components/FlightCard/FlightCard";
import "./PriceComparator.css"

function PriceComparator() {
  return (
    <div id="comparatorContent">
      <div id="Resultados">
        <div id="InfoResultados"></div>
        <div id="FlightsContainers">
          <FlightCard />
        </div>
      </div>
    </div>
  );
}

export default PriceComparator
