import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';

@InputType()
export class CreatePacienteInput {

  @Field(()=>String )
  @IsNotEmpty()
  name:string;

  //
  @Field(()=>Boolean )
  @IsOptional()
  estado:boolean;



  
}
