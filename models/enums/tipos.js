import { gql } from "apollo-server-express";

const tiposEnums =gql`

    scalar Date
    enum Enum_EstadoUsuario{
        PENDIENTE
        AUTORIZADO
        NO_AUTORIZADO
    }

    enum Enum_Rol{
        LIDER 
        ESTUDIANTE 
        ADMINISTRADOR
    }

    enum Enum_EstadoProyecto{
        ACTIVO
        INACTIVO
    }
    
    enum Enum_FaseProyecto{
        INICIADO
        DESARROLLO
        TERMINADO
        NULA
    }
    
    enum Enum_TipoObjetivo{
        GENERAL
        ESPECIFICO
    }
    enum Enum_EstadoInscripcion{
        ACEPTADO
        RECHAZADO
        PENDIENTE
    }

`;

//en la mutacion crearUsuario se crea un usuario. Dentro del parentesis van los imputs que debería tener el usuario, se hace crearUsuario():Usuario para decirle que devuelve un Usuario y no se pone entre corchetes porque es un único Uusairo y no un arreglo de usuarios
export {tiposEnums}