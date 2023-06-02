import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './pacientes/pacientes.module';

@Module({
  imports: [PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
