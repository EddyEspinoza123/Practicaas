import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Paciente {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column('varchar',{unique:true})
    nombre:string;

    // @Column('varchar',{
    //     unique:true
    // })
    // nombre:string;

    // @Column('text', {nullable:true})
    // direccion:string;

    // @Column('text',{array:true})
    // telefono:string[];

    // @Column('int8', {default:0})
    // tipo: number;

    // @Column('boolean', {default:true})
    // estado:boolean;
}

