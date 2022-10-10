import * as React from 'react';
import axios from "axios";

// Grid
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

// ARTICULOS
const GetArticulos = () => {
  var config = {
    method: 'get',
    url: 'http://localhost:9001/api/articulos',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      let articulos = response.data
      // console.log(JSON.stringify(articulos));

      articulos.map((articulo) => (
        console.log(articulo)
      ))
    })
    .catch(function (error) {
      console.log(error);
    });

  //   {
  //     "descripcion_Corta": "Paletón de Cajeta  10/14g Cor",
  //     "articulo_Disponible": "1",
  //     "last_Update_Inventory": "2020-02-24 17:29:27.483",
  //     "id_Clasificacion": 237,
  //     "stock_Min": "0.000",
  //     "iva": "0.00",
  //     "cod_nterno": null,
  //     "kit_Fecha_Ini": null,
  //     "kit_Fecha_Fin": null,
  //     "utilidad": "20.235",
  //     "stock_Max": "0.000",
  //     "kit": "0",
  //     "fecha_Registro": "2020-04-07 11:34:47.347",
  //     "cod_Barras": "001122334455",
  //     "cod_Asociado": null,
  //     "cantidad_Um": "1.000",
  //     "id_Proveedor": "93499BBB-944B-4914-A614-37E127AD8ED4",
  //     "precio_Venta": "12.300",
  //     "descripcion": "Gomitas de dulce",
  //     "precio_Compra": "10.230",
  //     "id_Unidad": "B6988452-9179-46F4-B97B-D44611EB5F18",
  //     "tipo_Articulo": "principal",
  //     "stock": "0.000",
  //     "cve_Producto": "50161813",
  //     "activo": "1",
  //     "puntos": "0",
  //     "visible": "0"
  // }
  
  
}
const baseURL = "http://localhost:9001/api/articulos";

const GridArticulos = () => {
  const [articulos, setArticulos] = React.useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setArticulos(response.data);
      // console.log(response.data)
    });
  }, []);

  if (!articulos) return null;

  return (
    <Grid container spacing={4}>
      {articulos.map((articulo) => (
        <Grid item key={articulo.cod_Barras} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="src/assets/images/default.png"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {articulo.descripcion}
              </Typography>
              <Typography>
              {articulo.descripcion_Corta}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
  
}

// ARTICULOS

const TestTitulo = () => {
  return (
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      Test titulo
    </Typography>
  );
}

export default function GaleryArticulos() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Articulos
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Articulos
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Articulos disponibles.
            </Typography>
            <TestTitulo />
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <GridArticulos />
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}