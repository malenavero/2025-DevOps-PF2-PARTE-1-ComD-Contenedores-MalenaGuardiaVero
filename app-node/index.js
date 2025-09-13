const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;

const dbConfig = {
  host: 'mysql-server', 
  user: 'root',
  password: '1234',
  database: 'alumnos_db'
};

app.get('/', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM alumnos');
    res.json(rows);
    await connection.end();
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
