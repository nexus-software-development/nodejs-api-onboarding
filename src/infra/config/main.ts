import { NestFactory } from "@nestjs/core";
import { AppModule } from "@infra/modules/app";
import { SwaggerConfig } from "./swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true
    })
  );

  SwaggerConfig.config(app);

  await app.listen(3001);
}
bootstrap();
