import React , {Component , Fragment} from 'react';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';

import {BrowserRouter  as Router , Route , Switch } from 'react-router-dom';


// imports components
import Header from './components/Header'
import Contacto from './components/Clientes'
import EditarCliente from './components/EditarCliente';
import NuevoCliente from './components/NuevoCliente';



const client = new ApolloClient({
    uri:"http://localhost:4000/graphql",
    onError:({networkError,graphQLErrors})=>{
     console.log('graphqlErrors', graphQLErrors)
     console.log('networkError', networkError);
    }

});



function App() {
  return (
    <div>
     <ApolloProvider client={client}>
       <Router>
            <Fragment>
                  <Header/>
                  <div className="container">
                    <Switch>
                      <Route exact path="/" component={Contacto}  ></Route>
                      <Route exact path="/cliente/editar/:id" component={EditarCliente}  ></Route>
                      <Route exact path="/cliente/nuevo" component={NuevoCliente}  ></Route>
                    </Switch>
                  </div>
            </Fragment>
       </Router>
     </ApolloProvider>
    </div>
  );
}

export default App;
