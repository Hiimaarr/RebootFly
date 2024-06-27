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
                 Name
                </Typography>
              </CardContent>
        </div>    
            
        <div id="surname">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Surname
                </Typography>
              </CardContent>
        </div>   
        <div id="username">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Username
                </Typography>
              </CardContent>
        </div>             
        <div id="email">
               <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Email
                </Typography>
              </CardContent>
            </div>    
        <div id="phone">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Phone
                </Typography>
              </CardContent>
        </div>
        <div id="password">
           
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Password
                </Typography>
              </CardContent>

        </div>    
        <div id="buttonSave">
            <Button size="small" text="Save" />
        </div>
        </section>
        <section id="Flights">
        <h2 id="titleFlights"className="title">Flights</h2>
        <div id=" Oferta1" className="Oferta">
            <Card sx={{ maxwidth:"100vw", display:"flex" } }>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Origen ida
                </Typography>
              </CardContent>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Destino ida
                </Typography>
              </CardContent>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               Hora salida
            </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Precio ida
                </Typography>
            </CardContent>
            </Card>
        </div>
    
        <div id=" Oferta2 " className="Oferta">
        <Card sx={{ maxWidth: "100vw", marginTop: '10px', display:"flex" }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                     Origen vuelta
                </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Destino vuelta
                </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Hora vuelta
                </Typography>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Precio vuelta
                </Typography>
            </CardContent>
        </Card>
        </div>
        <div id="button">
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                marginBottom:"50px",
                marginTop:"50px",
                gap:"25px"
            }}
            >
            <Button size="small" text="Back to home" onClick={()=>{navigate("/")}}/>
            </Box>
        </div>
        </section>
    </div>
    )
}

export default Profile