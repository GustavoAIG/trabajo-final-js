import { Box } from '@mui/material';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Forum from '../components/Forum';
import WelcomeSection from '../components/Welcome';

const HomePage = () => {
  return (
    <Box>
      {/* Navbar */}
      <Navbar />

      {/* Contenido principal con espaciado */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10, padding: 3 }}>
        <Box>
          <WelcomeSection />
        </Box>
        {/* Slider Section */}
        <Box id="slider">
          <Slider />
        </Box>

        {/* Gallery Section */}
        <Box id="gallery">
          <Gallery />
        </Box>

        
        {/* Contact Form Section */}
        <Box id="form">
          
          <ContactForm />
        </Box>

        {/* Forum Section */}
        <Box id="forum">
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
