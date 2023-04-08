import { createClient } from 'redis';
import { sign } from 'jsonwebtoken';
import { ILogin } from '../type';

const CreateToken = async (data: ILogin) => {
  try {
    const token = sign(data, 'secret');

    // redis port = 6379
    const client = createClient(
      {
        socket: {
          port: 6379,
          host: process.env.DB_HOST
        }
      }
    );
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
    await client.set(data.user_name, token);

    // set key timeout
    // await client.expire(data.user_name, 600);

    return token;
  } catch (err) {
    return err;
  }
};

export default CreateToken;
