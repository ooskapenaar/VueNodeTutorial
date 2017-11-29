const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      config = require('./config/DB'),
      itemRoutes = require('./expressRoutes/itemRoutes');

      mongoose.Promise = global.Promise;
      mongoose.connect(config.DB,{useMongoClient:true}).then(
          () => {console.log(`${config.DB}    connected`) },
          err => { console.log(`${config.DB}    connection failed  ${err}`)}
        );

      const app = express();
      app.use(express.static('public'));
      app.use(bodyParser.json());
      app.use(cors());
      app.use('/items', itemRoutes);
      const port = process.env.PORT || 4000;

      const server = app.listen(port, function(){
        console.log(`Listening on port ${port}`);
      });
