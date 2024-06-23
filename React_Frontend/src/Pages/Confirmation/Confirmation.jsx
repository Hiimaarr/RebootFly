import "./Confirmation.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button"

function Confirmation (){
    return (
        <>
            <div id="confirmation">
                <Box sx={{display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                    }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="210"
                    image="https://www.shutterstock.com/image-illustration/check-mark-icontick-symbol-260nw-590285786.jpg"
                    
                    />
                    <CardContent>
                        <Typography  >
                        Your flight was booked successfully
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" text="Download on PDF"/>
                <Link to="/">
                    <Button size ="small" text="Back to home"/>
                </Link>
                </CardActions>
             </Card>
        </Box>
    </div>
        </>
    )
}

export default Confirmation