import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { EstadoMatricula } from "./EstadoMatricula"

@Entity()
export class LineaMatricula {

    @PrimaryGeneratedColumn()
    id: number=0

    @Column()
    notaOrdinaria: number=0

    @Column()
    notaExtraordinaria: number=0

    @Column()
    notaFinal: number=0

    @Column()
    estado: EstadoMatricula

}