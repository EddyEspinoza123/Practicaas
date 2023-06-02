import { DispensadorService } from './dispensador.service';
import { CreateDispensadorDto } from './dto/create-dispensador.dto';
import { UpdateDispensadorDto } from './dto/update-dispensador.dto';
import { Dispensador } from './entities/dispensador.entity';
export declare class DispensadorController {
    private readonly dispensadorService;
    constructor(dispensadorService: DispensadorService);
    create(createDispensadorDto: CreateDispensadorDto): Dispensador;
    findAll(): Dispensador[];
    findOne(id: number): Dispensador;
    update(id: string, updateDispensadorDto: UpdateDispensadorDto): Dispensador;
    remove(id: string): void;
}
