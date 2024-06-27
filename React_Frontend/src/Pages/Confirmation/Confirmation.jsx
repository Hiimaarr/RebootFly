import "./Confirmation.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';
import {useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button"

function Confirmation (){
    const navigate = useNavigate()
    return (
      <>
        <div id="confirmation">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              
                <CardMedia
                  component="img"
                  height="210"
                  image="https://www.shutterstock.com/image-illustration/check-mark-icontick-symbol-260nw-590285786.jpg"
                />
                <CardContent>
                  <Typography>Your flight was booked successfully</Typography>
                </CardContent>
              
              <CardActions>
                <Button size="small" text="Download on PDF" />
                <Button
                  size="small"
                  text="Back to home"
                  onClick={() => {
                    navigate('/');
                  }}
                />
              </CardActions>
            </Card>
          </Box>
        </div>
      </>
    );
}

export default Confirmation