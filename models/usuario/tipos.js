import { gql } from "apollo-server-express";

const tiposUsuario =gql`

    scalar Date
    
    type Usuario {
        _id: ID!
        nombre: String!
        apellido: String!
        identificacion: String!
        correo: String!
        estado: Enum_EstadoUsuario
        rol: Enum_Rol!

    }

    type Query {
        Usuarios: [Usuario]
        Usuario(_id:String!):Usuario
    }
    
    type Mutation{
        crearUsuario(
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ):Usuario

        eliminarUsuario(
            _id:String,
            correo:String
        ):Usuario

        editarUsuario(
            _id:String!
            nombre: String!
            apellido: String!
            identificacion: String!
            correo: String!
            estado: Enum_EstadoUsuario
            rol: Enum_Rol!
        ):Usuario
    }
`;

//en la mutacion crearUsuario se crea un usuario. Dentro del parentesis van los imputs que debería tener el usuario, se hace crearUsuario():Usuario para decirle que devuelve un Usuario y no se pone entre corchetes porque es un único Uusairo y no un arreglo de usuarios
export {tiposUsuario};