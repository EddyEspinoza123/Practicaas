import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';
export declare class DispensadorService {
    private dispensador;
    create(createDispensadorDto: CreateDispensadorDto): Dispensador;
    findAll(): Dispensador[];
    findOne(id: number): Dispensador;
    update(id: number, updateEstudianteDto: UpdateDispensadorDto): Dispensador;
    remove(id: number): void;
}
