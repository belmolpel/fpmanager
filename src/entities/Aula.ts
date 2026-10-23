import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm"
import { TipoAula } from "./TipoAula"
import { Modulo } from "./Modulo"

@Entity()
export class Aula {

    @PrimaryGeneratedColumn()
    id: number=0

    @Column()
    numeroAula: number=0

    @Column()
    capacitat: number=0

    @Column()
    tipo: TipoAula
    @ManyToMany (()=>Modulo)
    @JoinTable()
    modulos:Modulo[]
    
}
