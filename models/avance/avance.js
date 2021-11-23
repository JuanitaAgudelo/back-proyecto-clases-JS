import mongoose from "mongoose";
//import {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from "../enums/enums";
import { ProyectModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

/*
interface Avances{
    fecha: Date;
    descripcion: string;
    observaciones: [string];
    proyecto: Schema.Types.ObjectId;
    creadoPor: Schema.Types.ObjectId;
}*/

const {Schema, model} = mongoose;

const avanceSchema = new Schema({
    fecha : {
        type:Date,
        required: true,
    },
    descripcion:{
        type: String,
        required: true,
    },
    observaciones: [
        {
        type:String,
        
        },
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref: ProyectModel,
        required: true,
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
        
});

//definir el modelo
const AvanceModel=model('Avance', avanceSchema);
export {AvanceModel};