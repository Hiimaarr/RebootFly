import Search from '../../Components/Search/Search';
import './Home.css';

function Home() {
  return (
    <>
      <div>
        <div id="PosicionHeader">
          <p> aqui va el Header </p>
        </div>
        <div id="ContenidoPagina">
          <Search/>
          <section id="Content">
            <div id=" Oferta1">Oferta 1</div>
            <div id=" Oferta2 ">Oferta 2</div>
            <div id=" Oferta3 ">Oferta 3</div>
            <div id=" Oferta4 ">Oferta 4</div>
            <div id=" Oferta5 ">Oferta 5</div>
            <div id=" Oferta6 ">Oferta 6</div>
          </section>
        <section id="Promociones">
          <div id="inputCorreo">Aqui va para meter el correo</div>
        </section>
        </div>
        <div id="PosicionFooter">
          <p> aqui va el Footer </p>
        </div>
      </div>
    </>
  );
}

export default Home;
