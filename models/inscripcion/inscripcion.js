import mongoose from "mongoose";
//import {Enum_EstadoInscipcion} from "../enums/enums";
import { UserModel } from "../usuario/usuario.js";
import { ProyectModel } from "../proyecto/proyecto.js";


/*interface Inscripcion{
    estado: Enum_EstadoInscipcion;
    fechaIngreso: Date;
    fechaEgreso: Date;
    proyecto:Schema.Types.ObjectId;
    estudiante: Schema.Types.ObjectId;
    
}*/

const {Schema, model} = mongoose;


const inscripcionSchema = new Schema({
    estado : {
        type:String,
        enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
        required: true,
        default:'PENDIENTE'
    },
    fechaIngreso:{
        type:Date,
        required: false,
    },
    fechaEgreso:{
        type:Date,
        required: false,
    },
    proyecto:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: ProyectModel
    },
    estudiante:{
        type: Schema.Types.ObjectId,
        required:true,
        ref: UserModel
    }
});

//definir el modelo
const InscripcionModel=model('Inscripcion', inscripcionSchema);
export {InscripcionModel};