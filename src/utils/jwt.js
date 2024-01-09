import jwt from 'jsonwebtoken';

// Firmar el token.
export const signJwt = ( payload, secretKey ) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
}


// Verificar si el token es valido.
export const verifyToken = (token, secretKey) => {
  var decoded = jwt.verify(token, secretKey);
  return decoded;
}



