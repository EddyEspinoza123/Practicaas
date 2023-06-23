import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteInput, UpdatePacienteInput } from './dto/inputs';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PacienteService {

  constructor( 
    @InjectRepository(Paciente)
    private readonly pacienteRepository:Repository<Paciente> ){}

  async create(createPacienteInput: CreatePacienteInput): Promise<Paciente>  {
    const newPaciente= this.pacienteRepository.create(createPacienteInput);
    return await this.pacienteRepository.save(newPaciente); 
  }

  async findAll(): Promise<Paciente[]> {
    return this.pacienteRepository.find();
  }

  async findOne(id: string): Promise<Paciente> {
     const paciente= await  this.pacienteRepository.findOneBy({id});
     if (!paciente) throw new NotFoundException(`Not found`)
     return paciente;
  }

  async update(id: string, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    
    const paciente = await this.pacienteRepository.preload(updatePacienteInput);
    if (!paciente) throw new NotFoundException(`Not found`)
    return this.pacienteRepository.save(paciente);

  }

  async remove(id: string): Promise<Paciente> {

    const paciente= await  this.findOne(id);

    await this.pacienteRepository.update({id:id},{estado:false})
    //await this.pacienteRepository.remove(paciente);

    return {...paciente, id};

  }
}
