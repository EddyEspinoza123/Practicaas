import { Module } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { PacienteController } from './pacientes.controller';


@Module({
  controllers: [PacienteController],
  providers: [PacientesService]
})
export class PacienteModule {}
