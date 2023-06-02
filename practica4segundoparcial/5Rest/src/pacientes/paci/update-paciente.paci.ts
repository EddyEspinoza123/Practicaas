import { PartialType } from '@nestjs/mapped-types';
import { CreatePacientesPaci } from './create-paciente.paci';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePacientesPaci extends PartialType(CreatePacientesPaci) {
    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
