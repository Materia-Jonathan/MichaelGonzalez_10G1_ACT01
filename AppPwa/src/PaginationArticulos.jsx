import * as React from 'react';
import { useState } from "react";
import axios from "axios";

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


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
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Pagination
import usePagination from "./PaginationCustom";

// AnimateScroll 
import { animateScroll as scroll } from "react-scroll";

export default function PaginationArticulos() {
    const [articulos, setArticulos] = React.useState([]);
    const [page, setPage] = useState(1);
    const PER_PAGE = 10;

    const handleChange = (e, p) => {
        setPage(p);
        _DATA.jump(p);
    };

    const goTopPage = () => {
        console.log("Top")
    }

    React.useEffect(() => {
        axios.get('http://localhost:9001/api/articulos').then((response) => {
            setArticulos(response.data);
        });
    }, []);

    if (!articulos) return null;

    const count = Math.ceil(articulos.length / PER_PAGE);
    const _DATA = usePagination(articulos, PER_PAGE);

    return (
        <Grid container spacing={4}>
            {_DATA.currentData().map((articulo) => {
                return (<Grid item key={articulo.cod_Barras} xs={12} sm={5} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
                            <Link
                                activeClass="active"
                                to="TopPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>Top</Link>
                        </CardActions>
                    </Card>
                </Grid>);
            })}

            <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                onClick={goTopPage}
            />
        </Grid>
    );
}
