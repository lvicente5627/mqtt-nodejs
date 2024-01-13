import mysqlPool from "../config/db.js";


export const updateTel = async(req, res) => {
  
    let { nuevoNombre, nuevoTelefono} = req.body;

    try {
      const connection = await mysqlPool.getConnection();
  
      // Consulta para actualizar un registro en la tabla "tel"
      const updateQuery = 'UPDATE tel SET nombre = ?, telefono = ? WHERE id = ?';
  
      // Ejecutar la consulta con los nuevos valores y el id del registro
      await connection.query(updateQuery, [nuevoNombre, nuevoTelefono, 1]);
  
      // Libera la conexión
      connection.release();
      
      console.log(`Registro con id 1 actualizado en la tabla "tel"`);
    } catch (error) {
      console.error('Error al actualizar el registro en la tabla "tel":', error.message);
      throw error;
    }
    res.json({result: true });

} 