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
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();
  const [airports, setAirports] = useState([]);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState();
  const [selectedReturnDate, setSelectedReturnDate] = useState();

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const data = await getAirports();
        setAirports(data);
      } catch (error) {
        console.error('Error fetching airports:', error.message);
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
    const idaDate = selectedDepartureDate;
    const vueltaDate = selectedReturnDate;

    console.log('Origen:', Origen);
    console.log('Ida:', idaDate);
    console.log('Vuelta:', vueltaDate);

    try {
      const result = await flightInfoToBack(
        Origen,
        Destino,
        idaDate,
        vueltaDate
      );

      console.log("soy el origen en home" + typeof Origen)
     console.log({ Origen, Destino, idaDate, vueltaDate });
      navigate('/price', { state: { Origen, Destino, idaDate, vueltaDate } });
      console.error('Error submitting flight info:', error);
    } catch (error) {
    }
  };

  return (
    <div id="ContenidoPagina">
      <Box id="BarraBuscar" component="form" onSubmit={handleSubmit}>
        <section id="BarraBuscar2">
          <div id="BarraBuscar3">
            <label>
              Origin
              <select name="Origen" id="Origen" required>
                {airports.map((airport) => (
                  <option key={airport.code} value={airport.id}>
                    {airport.name} ({airport.code})
                  </option>
                ))}
              </select>
            </label>
            <label>
              Destination
              <select name="Destino" id="Destino" required>
                {airports.map((airport) => (
                  <option key={airport.code} value={airport.id}>
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
                onChange={handleDateDepartureChange}
                required
              />
            </label>
            <label>
              Return
              <input
                type="date"
                id="Vuelta"
                onChange={handleDateReturnChange}
              />
            </label>
            <label>
              Pasajeros
              <select name="Pasajeros" id="Pasajeros" required>
                <option value="1">1 passenger</option>
                <option value="2">2 passengers</option>
              </select>
            </label>
            <button id="Lupa" type="submit">
              🔎
            </button>
          </div>
        </section>
      </Box>
      {/* Rest of your code remains unchanged */}
    </div>
  );
}

export default Home;
