

import gql from 'graphql-tag';

export   const CLIENTES_QUERY = gql`{
    getClientes{
      id
      nombre
      apellido
    }
}`;


export const CLIENTE_QUERY = gql`
   query  consultarcliente($id:ID)
    {
      getCliente(id: $id)
      {
        nombre
        apellido
        empresa
        tipo
        emails{
              email
          }
      }
    }
`;


