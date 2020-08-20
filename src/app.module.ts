import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatosUsuarioController } from './datos-usuario/datos-usuario.controller';

@Module({
  imports: [],
  controllers: [AppController, DatosUsuarioController],
  providers: [AppService],
})
export class AppModule {}
