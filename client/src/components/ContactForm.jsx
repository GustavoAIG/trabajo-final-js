import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "El nombre es obligatorio.";
    if (!formData.email) tempErrors.email = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "El correo no es válido.";
    if (!formData.message) tempErrors.message = "El mensaje es obligatorio.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_opiel5f", // Reemplaza con tu Service ID
          "template_kdtpo3k", // Reemplaza con tu Template ID
          formData,
          "-FJCoqo7jNlBEMycd" // Reemplaza con tu Public Key
        )
        .then(() => {
          alert("¡Mensaje enviado con éxito!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => console.error("Error al enviar mensaje:", err));
    }
  };

  return (
    <div className="forum-container">
      <h2 className="forum-title">Formulario de Contactos</h2>
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "35vh",
        width: "500px",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        color: "#A9A9A9", // Color metálico
        fontFamily: "'Orbitron', sans-serif", // Aplica Orbitron al contenedor general
        padding: "0 10px",
        margin: "auto",
      }}
    >
      
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        InputProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        InputLabelProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        FormHelperTextProps={{
          style: { color: "#FF6F61", fontFamily: "'Orbitron', sans-serif" },
        }}
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        InputProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        InputLabelProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        FormHelperTextProps={{
          style: { color: "#FF6F61", fontFamily: "'Orbitron', sans-serif" },
        }}
      />
      <TextField
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        multiline
        rows={4}
        fullWidth
        InputProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        InputLabelProps={{
          style: { color: "#A9A9A9", fontFamily: "'Orbitron', sans-serif" },
        }}
        FormHelperTextProps={{
          style: { color: "#FF6F61", fontFamily: "'Orbitron', sans-serif" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          color: "white", // Cambia el color del texto a blanco
          backgroundColor: "#333333", // Fondo oscuro del botón
          fontFamily: "'Orbitron', sans-serif", // Aplica Orbitron al botón
          border: "2px solid #A9A9A9", // Borde gris metálico
          ":hover": {
            backgroundColor: "#555555", // Fondo al pasar el puntero
            boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)", // Efecto de resplandor (hover)
          },
          ":active": {
            backgroundColor: "#222222", // Fondo al presionar el botón
            boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.8)", // Resplandor más fuerte al presionar
            transform: "scale(0.98)", // Efecto de reducción al presionar
          },
        }}
      >
        Enviar
      </Button>
    </Box>
    </div>
  );
};

export default ContactForm;
