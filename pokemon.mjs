import Pokedex from 'pokedex-promise-v2';

const pokedex = new Pokedex();

console.log(Pokedex);
//console.log(pokedex);

const PUERTO = process.env.PORT || 3000;
import express from "express";
const app = express();
const routerPokemon = express.Router();

/*app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
})*/
app.use( "/pokemon", routerPokemon);

routerPokemon.get("/:pokemon", (req,res)=>{
    //console.log(req.headers);
    res.setHeader('Origin',"file:///home/juan/Dropbox/nodejs/pokedex/index.html");
    //res.setHeader('Access-Control-Allow-Origin',"file:///home/juan/Dropbox/nodejs/pokedex/index.html");
    res.setHeader('Access-Control-Allow-Origin',"*");
    //console.log(res.headersSent);

    const nombrePokemon = req.params.pokemon;
    try{
      pokedex.getPokemonByName(nombrePokemon).then((response) => {
        res.send(response);
      });
    }catch(error){
      console.error(error);
    }
})

//import cors from 'cors';
//app.use(cors());

app.listen(PUERTO,()=>{
  console.log("Probando...")
});


//---------------------------------------------------------------------




/*
app.use(cors({
  methods: 'GET,POST,PATCH,DELETE,OPTIONS',
  optionsSuccessStatus: 200,
  origin: 'https://http://localhost:3000'
}));
app.options('*', cors());

//______________________________________________________________

const configuracion = {
  application: {
      cors: {
          server: [
              {
                  origin: "localhost:3000", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                  credentials: true
              }
          ]
      }
  }
}

app.use(cors(
  configuracion.application.cors.server
));
*/
