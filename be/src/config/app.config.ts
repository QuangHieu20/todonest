import { registerAs } from '@nestjs/config';

/**
 * Application configuration
 * @returns Application configuration object
 */
export default registerAs('app', () => ({
  port: parseInt(process.env.BACKEND_PORT || '4000', 10),
  nodeEnv: process.env.NODE_ENV || 'development',
}));
