const express = require('express');
const app = express();
const mysql = require('mysql');

// Conectar a la base de datos
const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fJ}1091-wbiv',
  database: 'formulario'
});

// Procesar el formulario
app.post('/formulario', (req, res) => {
  const nombre = req.body.nombre;
  const correo = req.body.correo;
  const mensaje = req.body.mensaje;

  // Insertar los datos en la base de datos
  const query = "INSERT INTO formulario (nombre, correo, mensaje) VALUES (?, ?, ?)";
  conexion.query(query, [nombre, correo, mensaje], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Datos insertados correctamente');
    }
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});