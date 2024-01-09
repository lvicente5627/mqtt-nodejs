import  request from 'supertest';
import    app from '../app.js'; // Importa tu aplicación Express desde el archivo index.js

// Prueba para octener todos los usuario
describe('Pruebas de obtener todos los usuarios', () => {
  
  // Debe de responder con un status code 200
  it('Deberia de responder con status code 200', async () => {
    const response = await request(app)
      .get('/users').send()

    expect(response.statusCode).toEqual(200);
   
  });

  // Debe de contenener en el header content-type json.
  it('Debería de contener en el header Content-type json', async () => {
    const response = await request(app)
      .get('/users').send()
      .expect('Content-Type', /json/); 
    
   
  });

  // Debe responder con un objeto
  it('Debe de obtener responder con un objeto', async () => {
    const response = await request(app)
      .get('/users').send()
    
    expect(response.body).toBeInstanceOf(Object);
   
  });

   // Debe contener los atributos id, email, password.
   it('Debe contener los atributos id, email, password', async () => {
    const response = await request(app)
      .get('/users').send()

      expect(response.body.data[0].id).toBeDefined();
      expect(response.body.data[0].email).toBeDefined();
      expect(response.body.data[0].password).toBeDefined();
   
  });

});



// Pruebas para registrar usuarios.
describe('Cuando faltan datos', () => { 

  it('deberia de responder 400 status Code', async() => {
    const fields = [
      {},
      {email: 'test task'},
      {password: '123456'}
    ]

    for (let body of fields ) {
      const response = await  request(app).post('/createuser').send(body);
      
      expect(response.statusCode).toBe(400);
      expect(response.body.msg).toEqual('Bad Request');
    }

  });

});

/*

describe('Pruebas de autenticación', () => {
  let token = '';

  it('Debería registrar un usuario', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'usuarioPrueba', password: 'passwordPrueba' });
    
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'Usuario registrado correctamente');
  });

  it('Debería iniciar sesión con un usuario registrado', async () => {
    const res = await request(app)npm test
  it('Debería obtener datos protegidos con el token', async () => {
    const res = await request(app)
      .get('/data')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Información protegida');
  });

  it('Debería devolver error al obtener datos protegidos sin token', async () => {
    const res = await request(app)
      .get('/data');
    
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Token no proporcionado');
  });

  it('Debería devolver error al obtener datos protegidos con token inválido', async () => {
    const res = await request(app)
      .get('/data')
      .set('Authorization', 'Bearer tokenInvalido');
    
    expect(res.statusCode).toEqual(403);
    expect(res.body).toHaveProperty('error', 'Token inválido');
  });
});

*/