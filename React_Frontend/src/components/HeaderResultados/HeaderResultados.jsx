import './HeaderResultados.css';

function HeaderResultados({direction,departAirport,arriAirport}) {
  return (
    <>
      <div id="HeaderResultados">
      <p>{direction}</p>
      </div>
      <div id='siuu'>
        <p> {departAirport}</p>
        <p>{arriAirport}</p>
      </div>
      
    </>
  );
}

export default HeaderResultados;
