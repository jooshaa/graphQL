import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "@nestjs/config";

async function start() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api")
  const config = app.get(ConfigService);
  const PORT = config.get<number>("PORT")?? 3030;
  await app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}`);
  });
}
start();