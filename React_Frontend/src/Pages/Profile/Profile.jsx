import "./Profile.css"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import { Box,SnackbarContent,TextField} from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Profile (){
const navigate = useNavigate()
    return (
      <div id="profile-view">
        <section id="Profile">
          <div id="titleProfile">
            <h2 className="title">Profile</h2>
          </div>
          <div id="name">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                David
              </Typography>
            </CardContent>
          </div>

          <div id="surname">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                García
              </Typography>
            </CardContent>
          </div>
          <div id="username">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                davidG
              </Typography>
            </CardContent>
          </div>
          <div id="email">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                amadorgarciadavid@gmail.com
              </Typography>
            </CardContent>
          </div>
          <div id="phone">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                636666666
              </Typography>
            </CardContent>
          </div>
          <div id="password">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ******
              </Typography>
            </CardContent>
          </div>
          <div id="buttonSave">
            <Button size="small" text="Save" />
          </div>
        </section>
        <section id="Flights">
          <h2 id="titleFlights" className="title">
            Flights
          </h2>
          <div id=" Oferta1" className="Oferta">
            <h2>Outbound Flights</h2>
            <Card sx={{ maxwidth: '100vw', display: 'flex' }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Los Angeles
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  London
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  08:00:00
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  350 €
                </Typography>
              </CardContent>
            </Card>
          </div>

          <div id=" Oferta2 " className="Oferta">
            <h2>Return Flights</h2>
            <Card
              sx={{ maxWidth: '100vw', marginTop: '10px', display: 'flex' }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  London
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Los Angeles
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  10:00:00
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  320 €
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div id="button">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '50px',
                marginTop: '50px',
                gap: '25px',
              }}
            >
              <Button
                size="small"
                text="Back to home"
                onClick={() => {
                  navigate('/');
                }}
              />
            </Box>
          </div>
        </section>
      </div>
    );
}

export default Profile