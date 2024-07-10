import { NestFactory } from "@nestjs/core";
import { AppModule } from "@infra/modules/app";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
