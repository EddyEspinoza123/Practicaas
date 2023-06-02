import { PacientesService } from './pacientes.service';
import { CreatePacientesPaci } from './paci/create-paciente.paci';
import { UpdatePacientesPaci } from './paci/update-paciente.paci';
import { Pacientes } from './entities/pacientes.entity';
export declare class PacienteController {
    private readonly pacientesServices;
    constructor(pacientesServices: PacientesService);
    create(CreatePacientesPaci: CreatePacientesPaci): Pacientes;
    findAll(): Pacientes[];
    findOne(id: number): Pacientes;
    update(id: string, UpdatePacientesPaci: UpdatePacientesPaci): Pacientes;
    remove(id: string): void;
}
