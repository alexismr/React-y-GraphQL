import express from 'express';
import  graphqlHTTP  from 'express-graphql';
import bodyParser from 'body-parser';
import { schema } from './data/schema'

const app = new express();

app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'application/json' }));


app.get('/', (req , res)=>{
   res.send('oks')
   
});

app.use('/graphql' , graphqlHTTP({
    // schame que se va  utilizar 
    schema,
    // utilizar graohql
    graphiql: true

}));

app.listen(800,() =>{});
