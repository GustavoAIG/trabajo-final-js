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
    { id: 1, src: "https://img.freepik.com/foto-gratis/escena-estilo-vida-al-estilo-anime-persona-haciendo-tareas-diarias_23-2151002612.jpg?t=st=1732632939~exp=1732636539~hmac=c35cff9b8da94c8d62825ac1d50898cc3b7e0d44df7a91a5611ef3a0c9231be2&w=1380", alt: "Image 1", url: "https://www.ibm.com/mx-es/topics/artificial-intelligence" },
    { id: 2, src: "https://img.freepik.com/foto-gratis/retrato-animales-cerca_23-2150532675.jpg?t=st=1732632972~exp=1732636572~hmac=0a1f58872b01ac9504e38450147a6acafa901cb326c90af946a9b6f9b683e349&w=740", alt: "Image 2", url: "https://www.microsoft.com/es-es/ai" },
    { id: 3, src: "https://img.freepik.com/foto-gratis/guerrero-cyberpunk-paisaje-urbano_23-2150712506.jpg?t=st=1732632991~exp=1732636591~hmac=d129b9063d735add1c100aac61a88ee9a5423d26ba4501ff574e82f96634031c&w=740", alt: "Image 3", url: "https://azure.microsoft.com/es-mx/solutions/ai" },
    { id: 4, src: "https://img.freepik.com/foto-gratis/estilo-arte-digital-leones_23-2150977823.jpg?t=st=1732633130~exp=1732636730~hmac=39f0184f31fbc270341447b34e6a277663b413de33c183642ecd6c8796a7f907&w=740", alt: "Image 4", url: "https://gestion.pe/peru/uni-contara-con-carrera-ingenieria-de-inteligencia-artificial-desde-cuando-noticia/" },
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
                style={{ width: "100%", cursor: "pointer", height: "100%" }}
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
