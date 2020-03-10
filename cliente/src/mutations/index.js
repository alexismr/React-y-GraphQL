import gql from 'graphql-tag';

export const NUEVO_CLIENTE = gql`
    mutation crearCliente($input:clienteInput)
    {
        crearCliente(input : $input){
            id
            nombre
            apellido
        }
    }
`;



export const ACTUALIZAR_CLIENTE = gql`
  
  actualizarCliente(input : $input)
  {
    nombre
    apellido
    empresa
    tipo
    emails{
      email
    }
  }
`;