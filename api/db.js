import mysql from 'mysql';

export const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senac@123',
  database: 'crud',
});

//configuração do meu banco