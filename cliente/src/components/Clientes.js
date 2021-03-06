import React , { Fragment} from 'react';
import { Query } from 'react-apollo';
import {Link } from 'react-router-dom';

// import query

import {CLIENTES_QUERY} from '../queries/index';


const Contacto = () => (
<Query query={CLIENTES_QUERY} pollInterval={1000}>
  {({ loading ,error , data , startPolling , stopPolling})=>{
      if(loading) return "cargando ..";
      if(error) return `error ${error.message}`;
      console.log(data);
      return (
          <Fragment>
            <h2 className="text-center"> listado  Clientes  </h2>
            <ul className="list-group mt-4"> 
               {data.getClientes.map(item =>(
                   <li key={item.id} className="list-group-item">
                         
                         <div className="row justify-content-between align-items-center">
                             <div className="col-md-8 d-flex justify-between aling-items-center">
                                     {item.nombre}  {item.apelllido}
                             </div>
                             <div className="col-md-4 d-flex justify-content-end">
                                <Link  to={`/cliente/editar/${item.id}`}  className="btn btn-success d-block d-md-inline-block">
                                    Editar Cliente
                                </Link>                         
                             </div>
                         </div>


                   </li>
               ))}
             </ul>
         </Fragment>
      )
     }  
  }
</Query>
)



export default Contacto;