const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'mysql-server',
  user: 'root',
  password: '1234',
  database: 'practica'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;
