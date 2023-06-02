import { CreatePacientesPaci } from './paci/create-paciente.paci';
import { UpdatePacientesPaci } from './paci/update-paciente.paci';
import { Pacientes } from './entities/pacientes.entity';
export declare class PacientesService {
    private pacientes;
    create(createPacientesPaci: CreatePacientesPaci): Pacientes;
    findAll(): Pacientes[];
    findOne(id: number): Pacientes;
    update(id: number, updatePacientesPaci: UpdatePacientesPaci): Pacientes;
    remove(id: number): void;
}
