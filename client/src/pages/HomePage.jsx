import { Box } from '@mui/material';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Forum from '../components/Forum';

const HomePage = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal con espaciado */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 3 }}>
        {/* Slider Section */}
        <Box>
          <Slider />
        </Box>

        {/* Gallery Section */}
        <Box>
          <Gallery />
        </Box>

        
        {/* Contact Form Section */}
        <Box>
          
          <ContactForm />
        </Box>

        {/* Forum Section */}
        <Box>
          <Forum />
        </Box>
      </Box>

      {/* Footer */}
      <Box >
          Inga Tello, Gustavo Alonso - Torres Urbina Jared Guillermo| Trabajo Final - Inteligencia Artificial
      </Box>
    </Box>
  );
};

export default HomePage;
