
import { ProyectModel } from "./proyecto.js";

const resolversProyecto = {
    Query:{
        Proyectos: async(parent, args)=>{
            const proyectos=await ProyectModel.find().populate('avances').populate('inscripciones');
            return proyectos;
        }
    },

    Mutation:{
        
        crearProyecto: async(parent, args)=>{
            const proyectoCreado = await ProyectModel.create({
                nombre: args.nombre,
                estado:args.estado,
                fase:args.fase,
                presupuesto:args.presupuesto,
                fechaInicio:args.fechaInicio,
                fechaFin: args.fechaFin,
                objetivos: args.objetivos,
                lider: args.lider
            
                
            });
            return proyectoCreado;
        }
    },

};

export {resolversProyecto}