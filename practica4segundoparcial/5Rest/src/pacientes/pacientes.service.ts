import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacientesPaci } from './paci/create-paciente.paci';
import { UpdatePacientesPaci } from './paci/update-paciente.paci';
import { Pacientes } from './entities/pacientes.entity';

@Injectable()
export class PacientesService {

  private pacientes: Pacientes[]=[
    {id:1, nombre:'Juan', identificacion:'1314502574'},
    {id:2, nombre:'Jose', identificacion:'1314502754'},
  ]

  create(createPacientesPaci: CreatePacientesPaci) {
    const pacientes = new Pacientes();
    pacientes.id=  Math.max( ... this.pacientes.map(elemento => elemento.id),0 )+1 ;
    pacientes.nombre= createPacientesPaci.nombre;
    pacientes.identificacion= createPacientesPaci.identificacion;
    // estudiante.direccion= createEstudianteDto.direccion;
    // estudiante.telefono= createEstudianteDto.telefono;
    // estudiante.identificacion= createEstudianteDto.identificacion;
    // estudiante.tipo= createEstudianteDto.tipo;
    this.pacientes.push(pacientes);
    return pacientes;
  }

  findAll() : Pacientes[] {
    return this.pacientes;
  }

  findOne(id: number) {
    const pacientes =  this.pacientes.find(pacientes=> pacientes.id===id);
    if (!pacientes) throw new NotFoundException(`ID ${id} not found`)
    return pacientes;
  }

  update(id: number, updatePacientesPaci: UpdatePacientesPaci) {
    const { nombre  } = updatePacientesPaci;
    const { identificacion  } = updatePacientesPaci;
    const pacientes = this.findOne(id);
    if (nombre) pacientes.nombre= nombre;
    if (identificacion) pacientes.identificacion= identificacion;
    // if (direccion) estudiante.direccion= direccion;
    // if (telefono) estudiante.telefono= telefono;
    // if (estado!= undefined) estudiante.estado= estado;

    this.pacientes =  this.pacientes.map( elemento=> {
      if (elemento.id===id) return pacientes;
      return elemento;
    } )

    return pacientes;

  }

  remove(id: number) {
    this.findOne(id);
    this.pacientes =  this.pacientes.filter(elemento=> elemento.id!== id);
  }
}
