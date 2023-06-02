import { CreateDispensadorDto } from './create-dispensador.dto';
declare const UpdateDispensadorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDispensadorDto>>;
export declare class UpdateDispensadorDto extends UpdateDispensadorDto_base {
    estado?: boolean;
}
export {};
