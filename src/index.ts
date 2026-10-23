import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { Usuario } from "./entities/Usuario"
import { Profesor } from "./entities/Profesor"
import { Docencia } from "./entities/Docencia"
import { Modulo } from "./entities/Modulo"
import { Aula } from "./entities/Aula"
import { TipoAula } from "./entities/TipoAula"

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next)
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

            } else if (result !== null && result !== undefined) {
                res.json(result)
            }
        })
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000)
/*
    // insert new users for test
    await AppDataSource.manager.save(
        AppDataSource.manager.create(Usuario, {
            firstName: "Timber",
            lastName: "Saw",
            age: 27
        })
    )

    await AppDataSource.manager.save(
        AppDataSource.manager.create(Usuario, {
            firstName: "Phantom",
            lastName: "Assassin",
            age: 24
        })
    )
*/
    let profe = new Profesor()
    profe.dni='111111111'
    profe.apellidos='apellidos'
    profe.correoElectronico='correo'
    profe.fechaIncorporacion= new Date()
    profe.nombre='nom1'
    profe.telefono='telefon1'
    await AppDataSource.manager.save(profe)

    let modul1 = new Modulo()
    modul1.codigo='codigo1'
    modul1.nombre='nombre1'
    console.log('modul avanç de guardar')
    console.log(modul1)
    await AppDataSource.manager.save(modul1)
    console.log('modul después de guardar')
    console.log(modul1)

    let modul2 = new Modulo()
    modul2.codigo='codigo2'
    modul2.nombre='nombre2'
    await AppDataSource.manager.save(modul2)
    

    let doc1 = new Docencia()
    doc1.cursoAcademico='2026-2027'
    doc1.modulo=modul1
    doc1.profesor=profe
    await AppDataSource.manager.save(doc1)

    let doc2 = new Docencia()
    doc1.cursoAcademico='2025-2026'
    doc1.modulo=modul1
    doc1.profesor=profe
    await AppDataSource.manager.save(doc2)

    console.log(profe)

    let aula1 = new Aula()
    aula1.capacitat=30
    aula1.numeroAula=206
    aula1.tipo=TipoAula.TALLER
    aula1.modulos=[modul1,modul2]
    await AppDataSource.manager.save(aula1)

    let aula2 = new Aula()
    aula2.capacitat=31
    aula2.numeroAula=207
    aula2.tipo=TipoAula.ORDDENADORES
    aula2.modulos=[modul1,modul2]
    await AppDataSource.manager.save(aula2)


    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
