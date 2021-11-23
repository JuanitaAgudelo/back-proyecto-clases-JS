import mongoose from "mongoose";
//import {Enum_Rol, Enum_EstadoUsuario} from "../enums/enums";


/*interface User{
    correo:string;
    identificacion: string;
    nombre: string;
    apellido: string;
    rol: Enum_Rol;
    estado: Enum_EstadoUsuario;
}*/

const {Schema, model} = mongoose;


const userSchema = new Schema({
    correo : {
        type:String,
        required: true,
        unique: true,
        validate: {
            //expresion regular para validar la estructura del correo electronico. Generalmente se encuentran en internet
            //las expresiones regulares se usan para hacer validaciones. Ejemplos: targetas de credito, documentos... etc 
            validator: (email)=>{
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },

        //VALIDACION DE MANERA RUSTICA (SOLO SE PUEDE VALIDAR QUE EL CORREO CONTENGA AL MENOS UN ARROBA Y UN PUNTO, PERO NO LA ESTRUCTURA EN SI)    
        /*validator: (email)=>{
            if(email.include('@') && email.include('.')){
                return true;
            }else{
                return false;
            }
        },*/
        message:'El formato del correo electronico esta malo',
    },

    },
    identificacion:{
        type:String,
        required: true,
        unique: true
    },
    nombre:{
        type:String,
        required: true,
    },
    apellido:{
        type:String,
        required: true,
    },
    rol:{
        type:String,
        required:true,
        enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
    },
    estado:{
        type:String,
        default: 'PENDIENTE',
        enum: ['PENDIENTE', 'AUTORIZADO', 'NO_AUTORIZADO']
    }
});

//definir el modelo
const UserModel=model('User', userSchema);
export {UserModel};