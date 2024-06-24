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
          <Search />
          <section id="Content">
            <div id=" Oferta1">
              <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg"
                  title="Madrid"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                    Madrid
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Madrid es una ciudad cosmopolita, fiel a sus costumbres, cultura y a su arte, pero a su vez es un lugar moderno, alberga centros culturales, económicos y políticos de primer orden en Europa
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
            <div id=" Oferta2 ">
              <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2022/10/20/torre-eiffel-y-el-rio-sena-en-paris.jpeg"
                  title="París"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                    París
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Explora París, la encantadora Ciudad de la Luz. Disfruta de la Torre Eiffel, el Louvre, paseos románticos por el Sena y deliciosa gastronomía francesa. Reserva tu vuelo y vive una experiencia inolvidable en la capital de Francia.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
            <div id=" Oferta3 ">
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://www.berlinsbi.com/uploads/sites/2/2023/06/web-banner-barcelona.jpg?w=1854&h=1043&crop=1"
                  title="Barcelona"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                    Barcelona
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Descubre Barcelona, una vibrante ciudad mediterránea. Admira la arquitectura de Gaudí, relájate en sus playas, disfruta de la deliciosa comida catalana y explora Las Ramblas. Reserva tu vuelo y vive la magia barcelonesa.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
            <div id=" Oferta4 ">
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://eu-central-1.linodeobjects.com/tecnohotelnews/2022/12/shutterstock_649614043.jpg"
                  title="Sevilla"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                  Sevilla
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Descubre Sevilla, corazón de Andalucía. Maravíllate con la Giralda, la majestuosa Catedral y el Alcázar. Disfruta de tapas, flamenco y paseos por el Barrio de Santa Cruz. Reserva tu vuelo y vive su encanto único.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
            <div id=" Oferta5 ">
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/60/63/0b/caption.jpg?w=500&h=400&s=1"
                  title="Lanzarote"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                  Lanzarote
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Explora Lanzarote, isla volcánica en Canarias. Disfruta de sus playas, paisajes únicos de Timanfaya, y bodegas de vino. Relájate en Jameos del Agua y César Manrique. Reserva tu vuelo y vive una experiencia inolvidable.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
            <div id=" Oferta6 ">
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="https://tourscanner.com/blog/wp-content/uploads/2023/11/que-ver-y-hacer-en-Cadiz.jpeg"
                  title="Cádiz"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div" >
                  Cadiz
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Descubre Cádiz, ciudad costera andaluza. Relájate en sus playas doradas, explora el casco antiguo, y saborea pescados frescos. Disfruta del carnaval y la rica historia gaditana. Reserva tu vuelo y vive Cádiz al máximo.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Reservar</Button>
                  <span size="small">Learn More</span>
                </CardActions>
              </Card>
            </div>
          </section>
          <section id="Promociones">
            <div id='infoPromo'>
            <h2>No te pierdas nuestras ofertas y novedades</h2>
        <ul>
            <li>Recibe las últimas ofertas de vuelos</li>
            <li>Recibe información sobre nuevas rutas</li>
            <li>Aprovecha nuestras promociones</li>
        </ul>
        <p>Y... ¡mucho más!</p>
            </div>
            <div id="SubPromo"><input id='inputEmail' type="email" placeholder='Ingrese su Correo'/> <p>Los datos personales facilitados serán tratados por Binter Canarias como responsable del tratamiento, para el envío periódico de noticias, ofertas de vuelos, información sobre nuevas rutas, concursos y otras promociones. Podrás revocar tu consentimiento y darte de baja e este servicio mediante el enlace habilitado en cada comunicación. Para más información, puedes consultar nuestra <a href="https://policies.google.com/privacy?hl=es">Política de privacidad</a>.
            </p> <button id='inputSub'>Suscribirme</button></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
