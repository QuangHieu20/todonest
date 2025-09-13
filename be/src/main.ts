import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

/**
 * Bootstrap application
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const configService = app.get(ConfigService);
  const port = configService.get('app.port');
  
  await app.listen(port);
  console.log(`🚀 Backend running on port ${port}`);
}
bootstrap();
