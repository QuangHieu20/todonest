import { registerAs } from '@nestjs/config';

/**
 * Database configuration
 * @returns Database configuration object
 */
export default registerAs('database', () => ({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'todo_nest',
  url: process.env.DATABASE_URL,
}));
