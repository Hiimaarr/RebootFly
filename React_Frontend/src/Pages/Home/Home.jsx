import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FlightContext } from '../../Context/FlightContext'; // Asegúrate de importar el contexto correcto
import { flightInfoToBack } from '../../services/auth';
import { getAirports } from '../../services/airports';
import Search from '../../components/Search/Search';
import './Home.css';

function Home() {
  const { searchFlights, flights, loading, error } = useContext(FlightContext);
  const [airports, setAirports] = useState([]);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAirports();
        setAirports(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchAirports();
  }, []);

  const handleDateDepartureChange = (event) => {
    setSelectedDepartureDate(event.target.value);
  };

  const handleDateReturnChange = (event) => {
    setSelectedReturnDate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const origin = data.get('Origen');
    const destination = data.get('Destino');
    const date = selectedDepartureDate;
    const returnDate = selectedReturnDate;

    try {
      await searchFlights(origin, destination, date, returnDate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="ContenidoPagina">
        <Search
          onSubmit={handleSubmit}
          airports={airports}
          handleDateDepartureChange={handleDateDepartureChange}
          handleDateReturnChange={handleDateReturnChange}
        />

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {flights && flights.length > 0 && (
          <section id="Content">
            {flights.map((flight) => (
              <div key={flight.id} className="Oferta">
                <Card sx={{ maxWidth: 345, marginTop: '20px' }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={flight.image} // Ajusta según la estructura de tu objeto de vuelo
                    title={flight.destination} // Ajusta según la estructura de tu objeto de vuelo
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {flight.destination}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {flight.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Reservar</Button>
                    <span size="small">Learn More</span>
                  </CardActions>
                </Card>
              </div>
            ))}
          </section>
        )}

        <section id="Promociones">
          <div id="infoPromo">
            <h2>No te pierdas nuestras ofertas y novedades</h2>
            <ul>
              <li>Recibe las últimas ofertas de vuelos</li>
              <li>Recibe información sobre nuevas rutas</li>
              <li>Aprovecha nuestras promociones</li>
            </ul>
            <p>Y... ¡mucho más!</p>
          </div>
          <div id="SubPromo">
            <input
              id="inputEmail"
              type="email"
              placeholder="Ingrese su Correo"
            />{' '}
            <p>
              Los datos personales facilitados serán tratados por Binter
              Canarias como responsable del tratamiento, para el envío periódico
              de noticias, ofertas de vuelos, información sobre nuevas rutas,
              concursos y otras promociones. Podrás revocar tu consentimiento y
              darte de baja e este servicio mediante el enlace habilitado en
              cada comunicación. Para más información, puedes consultar nuestra{' '}
              <a href="https://policies.google.com/privacy?hl=es">
                Política de privacidad
              </a>
              .
            </p>{' '}
            <button id="inputSub">Suscribirme</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
