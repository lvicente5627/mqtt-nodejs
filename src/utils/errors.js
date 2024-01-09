class ClientError extends Error {
  constructor(message, status = 400, errorNumber ){
    super(message);
    this.statusCode = status;
    this.errorNumber = errorNumber;
  }
}

class Error404 extends Error {
  constructor(message, status = 404, errorNumber ){
    super(message);
    this.statusCode = status;
    this.errorNumber = errorNumber;
  }

}

export default ClientError;