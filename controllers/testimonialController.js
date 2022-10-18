const guardarTestimonial = (req, res) => {
  // Validar
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre no puede estar vacio" });
  }
  if (correo.trim() === "") {
    errores.push({ mensaje: "El correo no puede estar vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje no puede estar vacio" });
  }

  if (errores.length > 0) {
    // Mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
    });
  } else {
    // Almacenarlo en la base de datos
  }
};

export { guardarTestimonial };
