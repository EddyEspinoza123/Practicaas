import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';

@Injectable()
export class DispensadorService {

  private dispensador: Dispensador[]=[
    {id:1, descripcion:'Uno'},
    {id:2, descripcion:'Dos'},
  ]

  create(createDispensadorDto: CreateDispensadorDto) {
    const dispensador = new Dispensador();
    dispensador.id=  Math.max( ... this.dispensador.map(elemento => elemento.id),0 )+1 ;
    dispensador.descripcion= createDispensadorDto.descripcion;
    // estudiante.direccion= createEstudianteDto.direccion;
    // estudiante.telefono= createEstudianteDto.telefono;
    // estudiante.identificacion= createEstudianteDto.identificacion;
    // estudiante.tipo= createEstudianteDto.tipo;
    this.dispensador.push(dispensador);
    return dispensador;
  }

  findAll() : Dispensador[] {
    return this.dispensador;
  }

  findOne(id: number) {
    const dispensador =  this.dispensador.find(dispensador=> dispensador.id===id);
    if (!dispensador) throw new NotFoundException(`ID ${id} not found`)
    return dispensador;
  }

  update(id: number, updateEstudianteDto: UpdateDispensadorDto) {
    const { descripcion  } = updateEstudianteDto;
    const dispensador = this.findOne(id);
    if (descripcion) dispensador.descripcion= descripcion;
    // if (direccion) estudiante.direccion= direccion;
    // if (telefono) estudiante.telefono= telefono;
    // if (estado!= undefined) estudiante.estado= estado;

    this.dispensador =  this.dispensador.map( elemento=> {
      if (elemento.id===id) return dispensador;
      return elemento;
    } )

    return dispensador;

  }

  remove(id: number) {
    this.findOne(id);
    this.dispensador =  this.dispensador.filter(elemento=> elemento.id!== id);
  }
}
