import mongoose from "mongoose";
//mongodb+srv://admin:<password>@gestiondeproyectosminti.kxaca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const conectionDB = async()=>{
    return await mongoose
    .connect(process.env.DATABASE_URL).then(()=>{
        console.log('conexion exitosa');
    })
    .catch((e)=>{
        console.log('error en la conexión: ', e);
    });
};

export default conectionDB;