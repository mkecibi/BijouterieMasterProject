'use strict'

const env = require('./env');

var knex = require('knex')({
  client: env.DATABASE_CLIENT,
  connection: {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    charset: env.DATABASE_CHARSET,
    /*connectionLimit: 15,
    queueLimit: 30,
    acquireTimeout: 1000000*/
  },
      pool: {
        min: 2,
        max: 7,
        idleTimeoutMillis: 3000,
        afterCreate: function (connection, callback) {
          //  console.log(' >>>>>>>>>>>>>>>>>>>>>>> afterCreate', connection.__knexUid);
            connection.on('error', function (err) {
                // the handler on one connection is sometime called several times
                // this.removeAllListeners();
                // https://github.com/tgriesser/knex/issues/1691
               // console.log(' >>>>>>>>>>>>>>>>>>>>>>> err', this.__knexUid);
            });
            callback(null, connection);
        }
    },
    acquireConnectionTimeout: 3000
});
var Bookshelf = require(env.ORM_NAME)(knex);

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
var db = {};

db.Bookshelf = Bookshelf;

//Models/tables
var modeles = require('../models/model.js')(Bookshelf);

db.User  = modeles.User  
db.Client  = modeles.Client  
db.Supplier  = modeles.Supplier 
db.ProductHeader  = modeles.ProductHeader  
db.Product  = modeles.Product 
db.Branche  = modeles.Branche 

db.knex = knex;
db.env = env;
module.exports = db;