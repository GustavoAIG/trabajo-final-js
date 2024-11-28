import { useState } from 'react';
import { useAuth } from '../context/AuthContext';  // Assuming your auth context is in a separate file
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Icon for the menu
import { Box } from '@mui/system';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false); // State for managing the Drawer

  const handleLogout = () => {
    // Remove token from localStorage (or sessionStorage)
    localStorage.removeItem('token');
    
    // Call logout from the context to update the state
    logout();
    
    // Redirect to the login page
    navigate('/login');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* AppBar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#ffffff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <img
            src="https://designerapp.officeapps.live.com/designerapp/document.ashx?path=/f9279621-8d9f-45a1-bc44-115986160dc0/DallEGeneratedImages/dalle-aec574f4-d9be-4429-ab22-f4af86962ecd0251669565258853096900.jpg&dcHint=BrazilSouth&fileToken=edeb56fa-df01-4c70-98fa-644f088d845e"
            alt="Logo"
            height="100px"
          />

          {/* Menu Icon for small screens */}
          <IconButton
            color="white"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{
              display: { xs: 'block', sm: 'none' },
              backgroundColor: '#ffffff',  // Set background to white
              borderRadius: '50%',  // Make the button circular
              padding: '8px',  // Add some padding to give a nice clickable area
              '&:hover': {
                backgroundColor: '#ffffff', // Light gray on hover
              },
            }}
          >
            <MenuIcon sx={{ color: '#000000'}} />  {/* Set icon color to black */}
          </IconButton>

          {/* Navigation buttons for large screens */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Button
              color="#ffffff"  // Set color to white
              component={Link}
              to="/"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#000000',
                ":hover": {
                  backgroundColor: '#000000',
                  color: '#ffffff', 
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Inicio
            </Button>

            <Button
              color="#ffffff"  // Set color to white
              component="a"
              href="#slider"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#000000',
                ":hover": {
                  backgroundColor: '#000000',
                  color: '#ffffff', 
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Slider
            </Button>

            <Button
              color="#ffffff"  // Set color to white
              component="a"
              href="#gallery"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#000000',
                ":hover": {
                  backgroundColor: '#000000',
                  color: '#ffffff', 
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Galería
            </Button>

            <Button
              color="#ffffff"  // Set color to white
              component="a"
              href="#form"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#000000',
                ":hover": {
                  backgroundColor: '#000000',
                  color: '#ffffff', 
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Formulario de Contacto
            </Button>

            <Button
              color="#ffffff"  // Set color to white
              component="a"
              href="#forum"
              sx={{
                fontFamily: "'Orbitron', sans-serif",
                color: '#000000',
                ":hover": {
                  backgroundColor: '#000000',
                  color: '#ffffff', 
                  boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                },
              }}
            >
              Foro
            </Button>

            {/* Conditionally render the logout button if the user is authenticated */}
            {isAuthenticated && (
              <Button
                color="#ffffff"  // Set color to white
                onClick={handleLogout}
                sx={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: '#000000',
                  ":hover": {
                    backgroundColor: '#000000',
                    color: '#ffffff', 
                    boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
                  },
                }}
              >
                Cerrar Sesión
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Inicio" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Slider" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Galería" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Formulario de Contacto" />
          </ListItem>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Foro" />
          </ListItem>

          {/* Conditionally render the logout button if the user is authenticated */}
          {isAuthenticated && (
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Cerrar Sesión" />
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* Adjust content below the fixed navbar */}
      <Box sx={{ paddingTop: '120px' }}>
        {/* Your page content goes here */}
      </Box>
    </Box>
  );
}

export default Navbar;
