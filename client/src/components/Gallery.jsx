import { useState } from "react";
import { Grid, Modal, Box } from "@mui/material";

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
  // Lista de imágenes
  const images = [
    { id: 1, src: "/src/assets/images/image1.jpg", alt: "Image 1" },
    { id: 2, src: "/src/assets/images/image2.jpg", alt: "Image 2" },
    { id: 3, src: "/src/assets/images/image3.jpg", alt: "Image 3" },
    { id: 4, src: "/src/assets/images/image4.jpg", alt: "Image 4" },
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
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", cursor: "pointer" }}
              onClick={() => handleOpen(image)}
            />
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
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Gallery;
