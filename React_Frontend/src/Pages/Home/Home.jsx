import Search from '../../components/Search/Search';
import './Home.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Home() {
  return (
    <>
      <div>
        <div id="ContenidoPagina">
          <Search/>
          <section id="Content">
            <div id=" Oferta1">
            <Card sx={{ maxWidth: 345, marginTop:"20px"}}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Madrid
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reservar</Button>
        <span size="small">Learn More</span>
      </CardActions>
    </Card>
            </div>
            <div id=" Oferta2 ">Oferta 2</div>
            <div id=" Oferta3 ">Oferta 3</div>
            <div id=" Oferta4 ">Oferta 4</div>
            <div id=" Oferta5 ">Oferta 5</div>
            <div id=" Oferta6 ">Oferta 6</div>
          </section>
        <section id="Promociones">
          <div id="inputCorreo">Aqui va para meter el correo</div>
        </section>
        </div>
      </div>
    </>
  );
}

export default Home;
