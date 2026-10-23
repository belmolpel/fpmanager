import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class RecursoTecnologico {

    @PrimaryGeneratedColumn()
    id: number=0

}