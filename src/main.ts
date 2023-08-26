import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const documentBuilder = new DocumentBuilder();
  documentBuilder
    .setTitle(`documentacion de la api`)
    .setDescription(`descripcion de la api`)
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup(`documentacion`, app, document);

  await app.listen(3000);
}
bootstrap();
