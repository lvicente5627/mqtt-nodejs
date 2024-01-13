// Importamos el pool de mysql.
import mysqlPool from '../config/db.js';

// Creamos la tabla tel en la base de datos.
export const createTableTel = async () => {
  try {
    const connection = await mysqlPool.getConnection();

    const selectquery = `
      SELECT * FROM tel;
    `
    const insertDataTel = `
      INSERT INTO tel (nombre, telefono) VALUES (?, ?);
    `
    
    // Consulta para crear la tabla si no existe
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS tel (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(255) NOT NULL,
        telefono VARCHAR(15) NOT NULL
      );
    `;
    

    await connection.query(createTableQuery);
    let [rows] = await connection.query(selectquery);

    
    if (rows.length === 0){
      await connection.query(insertDataTel, ['papi', '5083609228']); 
          
    }

    // Libera la conexión
    connection.release();
    
    console.log('Tabla "tel" creada o ya existente');
  } catch (error) {
    console.error('Error al crear la tabla "tel":', error.message);
    throw error;
  }
};

export default createTableTel;