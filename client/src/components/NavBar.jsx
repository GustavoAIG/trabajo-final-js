import { useAuth } from '../context/AuthContext';  // Assuming your auth context is in a separate file
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout} = useAuth();

  const handleLogout = () => {
    // Remove token from localStorage (or sessionStorage)
    localStorage.removeItem('token');
    
    // Call logout from the context to update the state
    logout();
    
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E3A8A' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontFamily: "'Orbitron', sans-serif",
            color: '#A9A9A9',
          }}
        >
          Inteligencia Artificial
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/" // Redirect to the home page
          sx={{
            fontFamily: "'Orbitron', sans-serif",
            color: '#A9A9A9',
            ":hover": {
              backgroundColor: '#374D9F',
              boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
            },
          }}
        >
          Inicio
        </Button>

        {/* Conditionally render the logout button if the user is authenticated */}
        {isAuthenticated && (
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              fontFamily: "'Orbitron', sans-serif",
              color: '#A9A9A9',
              ":hover": {
                backgroundColor: '#374D9F',
                boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            Cerrar Sesión
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
