

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/clientes" , { useNewUrlParser: true});

const clientesSchema = new mongoose.Schema({
         nombre : String,
         apellido : String,
         empresa : String,
         email : String,
         tipo: String,
         pedidos :  Array
});

const Clinetes = mongoose.model('clientes',clientesSchema );

export { Clinetes}
