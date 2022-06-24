const request = require('supertest');
const Server = require('../src/Server');
const connectToDb = require('../database');
const User = require('../src/models/User.model');
const Seller = require('../src/models/Seller.model');

const server = new Server();
const { app } = server;

let dbConnection;

const userCreate = {
  nombres: 'User',
  apellidos: 'Test',
  email: 'user@example.test',
  password: '12345678',
};

const userLogin = {
  email: 'user@example.test',
  password: '12345678',
};

beforeAll(async () => {
  dbConnection = await connectToDb();
});

beforeEach(async () => {
  await User.deleteMany();
  await Seller.deleteMany();
});

afterAll(async () => {
  await dbConnection.disconnect();
});

describe('User', () => {
  it('Return 404', async () => {
    const response = await request(app).get('/this-url-no-exist');
    expect(response.status).toBe(404);
  });

  it('Return "200 OK" when create user', async () => {
    const response = await request(app).post('/api/user/create').send(userCreate);
    expect(response.status).toBe(201);
  });

  it('Return "User Created" when create user', async () => {
    const response = await request(app).post('/api/user/create').send(userCreate);
    expect(response.body.message).toBe('User Created');
  });

  it('User is save', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const users = await User.find({});
    expect(users).toHaveLength(1);
  });

  it('Error "email is already exists" ', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const response = await request(app).post('/api/user/create').send(userCreate);
    expect(response.body.error).toBe('email is already exists');
  });

  it('Return token when signin', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const response = await request(app).post('/api/user/signin').send(userLogin);
    expect(response.body.token).not.toBeUndefined();
  });

  it('Return "Error: Data incorrect" when email is incorrect', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const response = await request(app)
      .post('/api/user/signin')
      .send({ ...userLogin, email: 'this email does not exist' });
    expect(response.body.error).toBe('Error: Data incorrect');
  });

  it('Return "Error: Data incorrect" when password is incorrect', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const response = await request(app)
      .post('/api/user/signin')
      .send({ ...userLogin, password: 'this password is incorrect' });
    expect(response.body.error).toBe('Error: Data incorrect');
  });

  it('Update user with token valid', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const { body } = await request(app).post('/api/user/signin').send(userLogin);
    const { token } = body;
    const response = await request(app)
      .patch('/api/user/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.message).toBe('update sucess');
  });

  it('Return "User name" when Update user with token valid', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const { body } = await request(app).post('/api/user/signin').send(userLogin);
    const { token } = body;
    const response = await request(app)
      .patch('/api/user/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.user.nombres).toBe('User name');
  });

  it('Update user with token invalid', async () => {
    await request(app).post('/api/user/create').send(userCreate);
    const token = 'this-token-is-invalid';
    const response = await request(app)
      .patch('/api/user/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.error).toBe('Unauthenticated');
  });
});

describe('Seller', () => {
  it('Return "200 OK" when create user', async () => {
    const response = await request(app).post('/api/seller/create').send(userCreate);
    expect(response.status).toBe(201);
  });

  it('Return "User Created" when create user', async () => {
    const response = await request(app).post('/api/seller/create').send(userCreate);
    expect(response.body.message).toBe('User Created');
  });

  it('User is save', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const sellers = await Seller.find({});
    expect(sellers).toHaveLength(1);
  });

  it('Error "email is already exists" ', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const response = await request(app).post('/api/seller/create').send(userCreate);
    expect(response.body.error).toBe('email is already exists');
  });

  it('Return token when signin', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const response = await request(app).post('/api/seller/signin').send(userLogin);
    expect(response.body.token).not.toBeUndefined();
  });

  it('Return "Error: Data incorrect" when email is incorrect', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const response = await request(app)
      .post('/api/seller/signin')
      .send({ ...userLogin, email: 'this email does not exist' });
    expect(response.body.error).toBe('Error: Data incorrect');
  });

  it('Return "Error: Data incorrect" when password is incorrect', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const response = await request(app)
      .post('/api/seller/signin')
      .send({ ...userLogin, password: 'this password is incorrect' });
    expect(response.body.error).toBe('Error: Data incorrect');
  });

  it('Update user with token valid', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const { body } = await request(app).post('/api/seller/signin').send(userLogin);
    const { token } = body;
    const response = await request(app)
      .patch('/api/seller/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.message).toBe('update sucess');
  });

  it('Return "User name" when Update user with token valid', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const { body } = await request(app).post('/api/seller/signin').send(userLogin);
    const { token } = body;
    const response = await request(app)
      .patch('/api/seller/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.user.nombres).toBe('User name');
  });

  it('Update user with token invalid', async () => {
    await request(app).post('/api/seller/create').send(userCreate);
    const token = 'this-token-is-invalid';
    const response = await request(app)
      .patch('/api/seller/update')
      .send({ nombres: 'User name' })
      .set('authorization', `Bearer ${token}`);
    expect(response.body.error).toBe('Unauthenticated');
  });
});
