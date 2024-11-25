import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Inteligencia Artificial
        </Typography>
        <Button color="inherit" component={Link} to="/">Inicio</Button>
        <Button color="inherit" component={Link} to="/slider">Slider</Button>
        <Button color="inherit" component={Link} to="/gallery">Galería</Button>
        <Button color="inherit" component={Link} to="/contact">Contacto</Button>
        <Button color="inherit" component={Link} to="/forum">Foro</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
