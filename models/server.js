const express = require('express');
const cors = require('cors');

class Server{

    constructor(){
        // Puerto
        this.port = process.env.PORT;

        // urls
        this.usuariosPath = '/api/usuarios';

        // app
        this.app = express();
        // MIDDLEWARE
        this.middlewares();
        
        // Routes
        this.router();
    }



    middlewares(){

        // Directorio publico
        this.app.use( express.static('public'));
        //TODO CORS: investigar sobre el CORDS
        this.app.use(cors());

        //TODO lectura y parseo del body
        this.app.use(express.json());
    }

    router(){
        this.app.use(this.usuariosPath, require('../routers/user.router'));
    }



    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Estoy corriendo en el puerto: ${this.port}` );
          });
    }


}



module.exports = Server;