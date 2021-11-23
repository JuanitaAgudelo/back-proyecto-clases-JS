import { gql } from "apollo-server-express";

const tiposProyecto =gql`

    scalar Date
   
    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo:Enum_TipoObjetivo!
    }

    input crearObjetivo{
        descripcion: String!
        tipo:Enum_TipoObjetivo!
    }

    type Proyecto{
        _id: ID!
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: Usuario!
        objetivos:[Objetivo]
        avances:[Avance]
        inscripciones: [Inscripcion]
        
    }

    type Query {
        Proyectos: [Proyecto]
    }
    
    type Mutation{
        crearProyecto(
            nombre: String!
            presupuesto: Float!
            fechaInicio: Date!
            fechaFin: Date!
            estado: Enum_EstadoProyecto!
            fase: Enum_FaseProyecto!
            lider: String!
            objetivos:[crearObjetivo]
           
        ):Proyecto
    }
`;

//en la mutacion crearUsuario se crea un usuario. Dentro del parentesis van los imputs que debería tener el usuario, se hace crearUsuario():Usuario para decirle que devuelve un Usuario y no se pone entre corchetes porque es un único Uusairo y no un arreglo de usuarios
export {tiposProyecto}