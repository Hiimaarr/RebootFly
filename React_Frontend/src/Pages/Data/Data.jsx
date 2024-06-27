import "./Data.css"
import Button from "../../components/Button/Button"
import { useNavigate} from "react-router-dom"
import { TextField, Box, Typography } from "@mui/material"
function Data() {
  const navigate = useNavigate()
  return (
    <>
    <div id="data">
   
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:"50px",
            marginTop:"50px"
          }}
        >  
        <Typography component="h1" variant="h5">
          Passenger 1
        </Typography>
        <br></br>
            <TextField
              label="Name"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
              sx={{backgroundColor:"white"}}
            />
            <TextField
                label="Surname"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
                sx={{backgroundColor:"white"}}
              />
            <TextField
                label="DNI"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
                sx={{backgroundColor:"white"}}
              />
        </Box>
        
        <Box
         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Typography component="h1" variant="h5">
          Contact Info
        </Typography>
        <br></br>
          <TextField
                label="Email"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
                sx={{backgroundColor:"white"}}
              />
          <TextField
                label="Confirm Email"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
                sx={{backgroundColor:"white"}}
              />
          <Button size="data" text="Continuar" onClick={()=>{navigate("/Payment")}}/>
        </Box>
    </div>
    </>
  )
}

export default Data
