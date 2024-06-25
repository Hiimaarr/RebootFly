import "./Profile.css"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Button/Button"
import { Box,TextField} from "@mui/material"


function Profile (){
const navigate = useNavigate()
    return (
        <>
        
            <h2 className="title">Profile</h2>
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
               <TextField
                label="Name"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
              /> 
            
            <TextField
                label="Surname"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
              /> 
        </Box>
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
               <TextField
                name="username"
                label="Username" // El username del perfil
                id="firstName"
                autoComplete="username"
                variant="filled"
                />
                
                <TextField
                 required
                 id="firstName"
                 label="Email Address"
                 name="email"
                 autoComplete="email"
                 variant="filled"
                />
        </Box> 
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
                <TextField
                 required
                 id="phone"
                 label="Phone"
                 name="phone"
                 autoComplete="phone"
                 variant="filled"
                />
        </Box>
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
           
        </>
    )
}

export default Profile