//  nos permite formatear los mensaje de error para que cada error tenga la misma estructura.
const resError = (res, status,errorNumber, message) => { 
  res.status(status).json({
    error: true,
    errorNumber,
    message
  });
}

export default resError;