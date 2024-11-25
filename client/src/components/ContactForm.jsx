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

  // Manejar cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validar campos
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

  // Manejar el envío del formulario
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
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
    >
      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
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
      />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
