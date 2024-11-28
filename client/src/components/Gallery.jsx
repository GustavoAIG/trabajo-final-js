import { useState } from "react";
import { Grid, Modal, Box, Typography } from "@mui/material";

// Estilos para el modal
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "80%",
  maxHeight: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Gallery = () => {
  // Lista de imágenes con las URL correspondientes
  const images = [
    { id: 1, src: "https://img.freepik.com/foto-gratis/equipo-uso-ninja-tiro-completo_23-2150961062.jpg?t=st=1732741663~exp=1732745263~hmac=0ae5b694659523d73eed0e83b96fbc8dce81bf60a8d83b72050451e4f5ced4b7&w=740", alt: "Image 1" },
    { id: 2, src: "https://img.freepik.com/foto-gratis/retrato-animales-cerca_23-2150532675.jpg?t=st=1732632972~exp=1732636572~hmac=0a1f58872b01ac9504e38450147a6acafa901cb326c90af946a9b6f9b683e349&w=740", alt: "Image 2" },
    { id: 3, src: "https://img.freepik.com/foto-gratis/guerrero-cyberpunk-paisaje-urbano_23-2150712506.jpg?t=st=1732632991~exp=1732636591~hmac=d129b9063d735add1c100aac61a88ee9a5423d26ba4501ff574e82f96634031c&w=740", alt: "Image 3" },
    { id: 4, src: "https://img.freepik.com/foto-gratis/estilo-arte-digital-leones_23-2150977823.jpg?t=st=1732633130~exp=1732636730~hmac=39f0184f31fbc270341447b34e6a277663b413de33c183642ecd6c8796a7f907&w=740", alt: "Image 4" },
    { id: 5, src: "https://img.freepik.com/foto-gratis/modelo-dibujos-animados-viviendas-propiedades-residenciales_23-2151024247.jpg?t=st=1732741424~exp=1732745024~hmac=3d91c4c25c8ddcc62956258ead84c555d8147afa83319686529b4989e2052f5b&w=740" },
    { id: 6, src: "https://img.freepik.com/fotos-premium/toma-escenica-montanas-alpes-creada-ia-generativa_762026-13321.jpg?w=740" },
    { id: 7, src: "https://img.freepik.com/foto-gratis/persona-deprimida-cuarto-oscuro_23-2150761396.jpg?t=st=1732741596~exp=1732745196~hmac=674dcb746df26c89cd1c2c27c47942041e2c442633f93c6cf4821e7a7c225a6b&w=740" },
    { id: 8, src: "https://img.freepik.com/foto-gratis/retrato-persona-taxi-amarillo-ciudad-nueva-york_23-2150819952.jpg?t=st=1732741636~exp=1732745236~hmac=5440d702580c2c5f7e56c8461b386e6e0fa74abe4dd0daedacd789e52f0f8621&w=740" },

  ];

  // Estado para abrir el modal
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Funciones para manejar el modal
  const handleOpen = (image) => {
    setCurrentImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
    
      {/* Grid de imágenes */}
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
            <div style={{ textAlign: "center" }}>
              <img
                src={image.src}
                alt={image.alt}
                style={{ width: "100%", cursor: "pointer", height: "600px" }}
                onClick={() => handleOpen(image)}
              />
              {/* URL debajo de la imagen */}
              <Typography variant="body2" color="textSecondary" style={{ marginTop: "8px" }}>
                <a href={image.url} target="_blank" rel="noopener noreferrer">
                  {image.url}
                </a>
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* Modal para ampliar imagen */}
      <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        {currentImage && (
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            style={{
              width: "100%",
              height: "auto", // Mantener proporción original de la imagen
              maxHeight: "80vh", // Limitar la altura máxima al 80% de la ventana
              objectFit: "contain", // Asegura que la imagen se ajuste sin recortarse
            }}
          />
        )}
      </Box>
    </Modal>
    </>
  );
};

export default Gallery;
