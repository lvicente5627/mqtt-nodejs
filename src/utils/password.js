import bcrypt from 'bcrypt';

// Funcion que recive una contrasena y devuelve una contrasena encriptada.
export const hashPassword = async(password) => {
  
  try {

    // Generate a salt (a random string) to further secure the password hashing
    const saltRounds = 5;
    const salt = await bcrypt.genSalt(saltRounds);
    
    // Generar un hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, salt);
    return (hashedPassword);

  } catch (error) {
    console.error('Error al encriptar la contrasena:', error);
  }
}

// Verificar que dos contrasena sea iguales
export const comparePassword = async (enteredPassword, passwordToVerify ) => {
  let result = false;
  try {
    result = await bcrypt.compare(enteredPassword, passwordToVerify);
    return result;
    
  } catch (error) {
    console.error('Error al comparar la contrasena encriptada:', error);  
  }


 

}