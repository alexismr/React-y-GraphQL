import mongoose from 'mongoose';
import { Clinetes } from './db';

export const resolvers = {
     Query :{
                getClientes : (root ,{limite})=>{
                    return Clinetes.find({}).limit(limite);
                },
                getCliente :  (root ,{id})=>{
                    return new Promise((resolve, object)=>{
                        Clinetes.findById(id ,(error, clienteRespon )=>{
                            if(error)rejects(error);
                            else resolve(clienteRespon);
                        });
                    })
                },
            },
    Mutation :{
        crearClinete : (root,  {input}) => {
                   const nuevoCliente = new Clinetes({
                    id: input.id,
                    nombre: input.nombre,
                    apellido: input.apellido,
                    empresa: input.empresa,
                    email: input.email,
                    tipo: input.tipo,
                    pedidos : input.pedidos
                   });
                   nuevoCliente.id = nuevoCliente._id;

                   return new Promise( (resolve , object ) => {
                        nuevoCliente.save((error)=>{
                            if(error) rejects(error)
                            else resolve(nuevoCliente)
                        }) ;
                   });
            },
            actualizarClinete: (root,{input}) => {
                return new Promise( (resolve , object ) => {               
                    Clinetes.findOneAndUpdate(
                         { _id : input.id} , input,
                         {new: true},
                         (error, cliente) => {
                            if(error) rejects(error)
                            else resolve(cliente)
                        });
                 });
            },
            eliminarCliente: (root,{id}) => {
                return new Promise( (resolve , object ) => {               
                    Clinetes.findOneAndDelete({_id:id},(error)=>{
                      if(error) rejects(error)
                      else resolve("se elimino el registro")
                    });
                 });
            }

    }
}

