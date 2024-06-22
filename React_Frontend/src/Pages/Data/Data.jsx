import "./Data.css"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"
import { TextField, Box, Grid } from "@mui/material"
function Data() {
  return (
    <>
    <div id="data">
        <h3>Passenger 1</h3>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom:"50px"
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
          <TextField
              label="DNI"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
        </Box>
        <h3>Contact Info</h3>
        <Box
         sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
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
        </Box>
          <Link /*to="/signup" Aqui iria la ruta de la siguiente página */>
          <Button size="data" text="Continuar"/>
          </Link>
    </div>
    </>
  )
}

export default Data
