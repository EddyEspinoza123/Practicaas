import { CreatePacientesPaci } from './create-paciente.paci';
declare const UpdatePacientesPaci_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePacientesPaci>>;
export declare class UpdatePacientesPaci extends UpdatePacientesPaci_base {
    estado?: boolean;
}
export {};
