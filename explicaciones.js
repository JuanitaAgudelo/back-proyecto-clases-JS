import conectionDB from "./db/db.js";
import {UserModel} from "./models/usuario/usuario.js";
import {ProyectModel} from "./models/proyecto/proyecto.js";
import { Enum_Rol, Enum_EstadoUsuario, Enum_TipoObjetivo } from "./models/enums/enums";

const main = async ()=>{
    await conectionDB();

   
};

main();


 //CRUD PARA USUARIOS:

    //CREAR UN USUARIO
   /* await UserModel.create({
        nombre: "Pepito",
        apellido: "Perez",
        identificacion: "3333",
        correo: "pe.pe@g.com",
        rol: Enum_Rol.administrador,
        

    }).then((u)=>{
        console.log("usuario creado ", u);
    })
    .catch(e=>{
        console.error("error creando el usuario ", e)
    });*/

    //OBTENER USUARIOs
    /*await UserModel.find().then((u)=>{
        console.log('Usuarios ', u);
    }).catch(e=>{
        console.error("error obteniendo los usuarios ", e)
    });*/

    //OBTENER UN SOLO USUARIO
    /*await UserModel.findOne({identificacion:"12345"}).then((u)=>{
        console.log('se encontró al usuario ', u)
    }).catch(e=>{
        console.error('ocurrio un error ', e)
    })*/


    //EDITAR USUARIO
    /*await UserModel.findOneAndUpdate(
        {correo: "juani@g.com"},
        {
        nombre: "Juaniuwu",
        apellido: "agudelouwu"   
        }
    ).then((u)=>{
        console.log('Usuario editado con éxito ', u);
    })
    .catch(e=>{
        console.error('Hay un error en ', e);
    })*/

    //ELIMINAR UN USUARIO
    /*await UserModel.findOneAndDelete(
        {correo:"juani@g.com"}
    ).then((u)=>{
        console.log('Usuario eliminado ', u)
    }).catch(e=>{
        console.error('no se pudo eliminar el usuario ', e)
    })*/

     //CRUD PARA PROYECTOS

    //CREAR UN PROYECTO
    /*await ProyectModel.create({
        nombre:"Proyecto3",
        presupuesto: 100000,
        fechaInicio:Date.now(),
        fechaFin: new Date('2022/11/10'),
        lider:'618deaa4953082a3200cbe6d',
        objetivos:[
            {descripcion: 'este es el objetivo general', tipo: Enum_TipoObjetivo.general  },
            {descripcion: 'este es el objetivo especifico1', tipo: Enum_TipoObjetivo.especifico },
            {descripcion: 'este es el objetivo especifico2', tipo: Enum_TipoObjetivo.especifico }
        ]
       
         
     }).then((u)=>{
         console.log("proyecto creado ", u);
     })
     .catch(e=>{
         console.error("error creando el proyecto ", e)
     });*/