import './CardRes.css'


function CardRes({Name, Name2, Price, Price2}) {
  const result = Price + Price2;
  return (
    <>
      <div id="Resumen">
        <div id='Titulo'>
        <h2>Resumen</h2>
        </div>
        <div id='Locations'> 
        <p> ✈️ {Name}</p>
        <p> ⟿⟿⟿</p>
        <p> {Name2} </p>
        </div>
        <div id='Suma'>
            <p> Precio del vuelo de Ida es {Price} € </p>
            <p> Precio del vuelo de Vuelta es {Price2} € </p>
            <br /> <br />
            <p> Total = {result} € </p>
        </div>
      </div>
    </>
  );
}

export default CardRes
