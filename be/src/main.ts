import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

/**
 * Bootstrap application
 */
async function bootstrap() {
  // Tối ưu startup time
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'], // Chỉ log important messages
  });
  
  const configService = app.get(ConfigService);
  const port = configService.get('app.port');
  
  // Enable graceful shutdown
  app.enableShutdownHooks();
  
  await app.listen(port, '0.0.0.0'); // Bind to all interfaces
  console.log(`🚀 Backend running on port ${port}`);
}

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  process.exit(1);
});

bootstrap();
