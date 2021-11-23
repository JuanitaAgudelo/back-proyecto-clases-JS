import mongoose from "mongoose";
//import {Enum_Rol, Enum_EstadoUsuario, Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from "../enums/enums";
import { UserModel } from "../usuario/usuario.js";


/*interface Proyect{
    nombre:string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider:Schema.Types.ObjectId;
    objetivos:[{descripcion:String; tipo:Enum_TipoObjetivo }]
    
}*/

const {Schema, model} = mongoose;

const proyectSchema = new Schema({
    nombre : {
        type:String,
        required: true,
    },
    presupuesto:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type:Date,
        required: true,
    },
    fechaFin:{
        type:Date,
        required: true,
    },
    estado:{
        type:String,
        required:true,
        default: 'INACTIVO',
        enum: ['ACTIVO', 'INACTIVO'],
    },
    fase:{
        type:String,
        default: 'NULO',
        required:true,
        enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO']
    },
    lider:{
        type:Schema.Types.ObjectId,
        required: true,
        ref:UserModel
    },
    objetivos:[
        {
            descripcion: {
                type: String,
                required:true
            }, 
            tipo: {
                type:String,
                enum: ['GENERAL', 'ESPECIFICO'],
                required: true
            }
        }

    ]
}, {
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}

);

proyectSchema.virtual("avances", {
    ref: "Avance",
    localField: "_id",
    foreignField: "proyecto",
});

proyectSchema.virtual("inscripciones", {
    ref: "Inscripcion",
    localField: "_id",
    foreignField: "proyecto",
});

//definir el modelo
const ProyectModel=model('Proyect', proyectSchema);
export {ProyectModel};