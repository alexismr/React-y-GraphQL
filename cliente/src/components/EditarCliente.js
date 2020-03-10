import React, { Component  , Fragment} from 'react'
import { Query } from 'react-apollo';
import {CLIENTE_QUERY} from '../queries/index';

import FormularioEditarCliente from './formularioEditarCliente';


class EditarCliente extends Component{
    state = {}
    render() {
        // obtener valores del router

        const {id} =this.props.match.params;


        console.log(id);
        return (
            <Fragment>
                <h2 className="text-center"> Editar cliente </h2>
                <div className="row justify-content-center ">
                 <Query  query={CLIENTE_QUERY}  variables={{id}}>         
                  {({loading ,error , data })=>{   
                           if(loading) return 'cargando..';
                            if(error) return `Error: ${error}`;
                            console.log(data);
                          return (
                              <FormularioEditarCliente
                              cliente={data.getCliente}
                              />
                             )

                     }}

                </Query>
                </div>
            </Fragment>
        )
    }
}

export default EditarCliente;

