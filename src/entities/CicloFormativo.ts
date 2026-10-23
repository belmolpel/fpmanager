import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class CicloFormativo {

    @PrimaryGeneratedColumn()
    id: number=0

    @Column()
    codigo: number=0

    @Column()
    nombre: String=''

    @Column()
    familiaProfesional: String=''

}