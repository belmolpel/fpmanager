import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Matricula {

    @PrimaryGeneratedColumn()
    id: number=0

    @Column()
    cursoEscolar: String=''

}