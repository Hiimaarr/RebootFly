import "./Data.css"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { TextField, Box, Typography } from "@mui/material"
function Data() {
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
            />
            <TextField
                label="Surname"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
              />
            <TextField
                label="DNI"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
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
              />
          <TextField
                label="Confirm Email"
                id="filled-size-normal"
                defaultValue=""
                variant="filled"
              />
          <Link to="/payment">
          <Button size="data" text="Continuar"/>
          </Link>
        </Box>
    </div>
    </>
  )
}

export default Data
