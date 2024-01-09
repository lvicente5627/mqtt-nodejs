// Nos permites formatiar la respuesta para que cada una tenga la misma estructura.
const response = (res, statusCode, data) => {
  res.status(statusCode).json({
    error: false,
    data,
  })

}

export default response;