import "./Payment.css"
import { Box, Typography,SnackbarContent,TextField } from "@mui/material"
import Button from "../../components/Button/Button"
import { Link } from "react-router-dom"

function Payment (){
    return (
        <>
         <div id="payment">
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom:"50px",
                marginTop:"50px",
                gap:"25px"
            }}
            >
            <SnackbarContent message="Price" sx={{height:"100px",justifyContent:"center"}}/>
            <TextField
              label="NºCard"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
            <TextField
              label="Name Card"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
            <TextField
              label="Surname Card"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
            <TextField
              label="Validity(MM/AA)"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
            <TextField
              label="CVV"
              id="filled-size-normal"
              defaultValue=""
              variant="filled"
            />
            <Link to="/Confirmation">
            <Button size="data" text="Continuar"/>
            </Link>
            <Link to="/Data">
            <Button size="small" text="Cancelar"/>
            </Link>
            </Box>
         </div>
        </>
    )
}

export default Payment