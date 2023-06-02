import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePacientesPaci {

    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    identificacion:string;

}
