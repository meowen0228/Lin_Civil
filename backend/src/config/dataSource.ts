import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: `${process.env.DB_PASS}`,
  database: process.env.DB_DATABASE,
  schema: process.env.DB_SCHEMA,
  synchronize: false,
  logging: true,
  entities: ['src/entity/**/*.{js,ts}'],
  migrations: ['src/migration/*.{js,ts}'],
  subscribers: [],
});
