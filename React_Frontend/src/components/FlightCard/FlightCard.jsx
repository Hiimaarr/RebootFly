import './FlightCard.css';

function FlightCard({departCode, arrivCode, departHour, arrivHour, price}) {


  return (
    <div id="FlightCard">
      <p>Departure Airport: {departCode}</p>
      <p>Arrival Airport:{arrivCode}</p>
      <h2>{price} €</h2>
    </div>
  );
}

export default FlightCard;
