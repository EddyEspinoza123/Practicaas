import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDispensadorDto {
    // @IsString()
    // @IsNotEmpty()
    // identificacion:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;

    // @IsString()
    // @IsNotEmpty()
    // direccion:string;
    

    // @IsString()
    // @IsNotEmpty()
    // telefono:string;

    // @IsNumber()
    // @IsNotEmpty()
    // tipo: number;
}
