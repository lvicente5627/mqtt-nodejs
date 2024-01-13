import mysql from 'mysql2/promise';
import dotenv  from "dotenv"

dotenv.config();

const connection = {};

const pool = mysql.createPool({
  host: process.env.DBHOST || 'localhost',
  user: process.env.DBUSER || 'user',
  password: process.env.DBPASSWORD || '123456',
  database: process.env.DBNAME ||  'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const connectDB = async () => {
  try {
    connection = await pool.getConnection();
    console.log('Conexión a la base de datos establecida');

    // Realiza operaciones en la base de datos aquí si es necesario

    // Libera la conexión cuando hayas terminado
    connection.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
};

// Opcional: Exporta el pool para usarlo en otras partes de tu aplicación si es necesario
export default pool;