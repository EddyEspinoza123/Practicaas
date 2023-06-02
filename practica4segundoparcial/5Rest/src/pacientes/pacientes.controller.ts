import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { PacientesService } from './pacientes.service'
import { CreatePacientesPaci } from './paci/create-paciente.paci';
import { UpdatePacientesPaci } from './paci/update-paciente.paci';
import { Pacientes } from './entities/pacientes.entity';

@Controller('pacientes')
export class PacienteController {
  constructor(private readonly pacientesServices: PacientesService) {}

  @Post()
  create(@Body() CreatePacientesPaci: CreatePacientesPaci) {
    return this.pacientesServices.create(CreatePacientesPaci);
  }

  @Get()
  findAll() : Pacientes[] {
    return this.pacientesServices.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.pacientesServices.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatePacientesPaci: UpdatePacientesPaci) {
    return this.pacientesServices.update(+id, UpdatePacientesPaci);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientesServices.remove(+id);
  }
}
