import './Home.css';
import Search from '../../components/Search/Search';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { flightInfoToBack } from '../../services/auth';
import { useState, useEffect } from 'react';
import { getAirports } from '../../services/airports';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [airports, setAirports] = useState([]);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedDepartureDate, setSelectedDepartureDate] = useState('');
  const [selectedReturnDate, setSelectedReturnDate] = useState('');

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAirports();
        setAirports(data);
      } catch (error) {
        console.log(error.message);
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
    const Origen = data.get('Origen');
    const Destino = data.get('Destino');
    const Ida = selectedDepartureDate;
    const Vuelta = selectedReturnDate;
    try {
      const result = await flightInfoToBack(Origen, Destino, Ida, Vuelta);
      navigate('/price', { state: { Origen, Destino, Ida, Vuelta } });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOriginChange = (event) => {
    const selectedOrigin = event.target.value;
    setOrigin(selectedOrigin);
    if (selectedOrigin === destination) {
      setDestination('');
    }
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    setDestination(selectedDestination);
    if (selectedDestination === origin) {
      setOrigin('');
    }
  };

  const filteredAirportsForOrigin = airports.filter(
    (airport) => airport.id !== destination
  );

  const filteredAirportsForDestination = airports.filter(
    (airport) => airport.id !== origin
  );

  return (
    <>
      <div id="ContenidoPagina">
        <Box id="BarraBuscar" component="form" onSubmit={handleSubmit}>
          <section id="BarraBuscar2">
            <div id="BarraBuscar3">
              <label>
                Origin
                <select
                  name="Origen"
                  id="Origen"
                  value={origin}
                  onChange={handleOriginChange}
                >
                  <option value="">Selecciona un aeropuerto</option>
                  {filteredAirportsForOrigin.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Destination
                <select
                  name="Destino"
                  id="Destino"
                  value={destination}
                  onChange={handleDestinationChange}
                >
                  <option value="">Selecciona un aeropuerto</option>
                  {filteredAirportsForDestination.map((airport) => (
                    <option key={airport.id} value={airport.id}>
                      {airport.name} ({airport.code})
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Departure
                <input
                  type="date"
                  id="Ida"
                  value={selectedDepartureDate}
                  onChange={handleDateDepartureChange}
                />
              </label>
              <label>
                Return
                <input
                  type="date"
                  id="Vuelta"
                  value={selectedReturnDate}
                  onChange={handleDateReturnChange}
                />
              </label>
              <label>
                Pasajeros
                <select name="Pasajeros" id="Pasajeros">
                  <option value="1"> 1 passenger</option>
                  <option value="2"> 2 passenger</option>
                </select>
              </label>
              <button id="Lupa" type="submit">
                🔎
              </button>
            </div>
          </section>
        </Box>
        <section id="Content"></section>
        <section id="Promociones"></section>
      </div>
    </>
  );
}

export default Home;
