import './HeaderResultados.css';

function HeaderResultados({ direction, departAirport, ArriAirport }) {
  return (
    <>
      <div id="HeaderResultados">
        <p>Vuelo de {direction}</p>
      </div>
      <div id="siuu">
        <p>{departAirport}</p>
        <p>{ArriAirport}</p>
      </div>
    </>
  );
}

export default HeaderResultados;
