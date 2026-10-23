import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm"
import { Profesor } from "./Profesor"
import { Modulo } from "./Modulo"

@Entity()
export class Docencia {

    @PrimaryGeneratedColumn()
    id: number=0

    @Column()
    cursoAcademico: string=''
    @ManyToOne(()=>Profesor,(profesor=>profesor.docencies))
    profesor: Profesor
    @ManyToOne(()=>Modulo,(modulo=>modulo.docencies))
    modulo: Modulo
}
