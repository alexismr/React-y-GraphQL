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