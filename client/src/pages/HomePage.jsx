
import { Box } from '@mui/material';
import Navbar from '../components/NavBar';
import Slider from '../components/Slider';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Forum from '../components/Forum';

const HomePage = () => {
  return (
    <Box>
      {/* Navbar (si lo tienes) */}
      <Navbar />


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

      {/* Footer */}
      <Box>
        <p>Inga Tello, Gustavo Alonso | Trabajo Final - Inteligencia Artificial</p>
      </Box>
    </Box>
  );
};

export default HomePage;
