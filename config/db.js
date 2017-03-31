'use strict'

const env = require('./env');

var knex = require('knex')({
  client: env.DATABASE_CLIENT,
  connection: {
    host: env.DATABASE_HOST,
    user: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    database: env.DATABASE_NAME,
    charset: env.DATABASE_CHARSET
  }
});
var Bookshelf = require(env.ORM_NAME)(knex);

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
var db = {};

db.Bookshelf = Bookshelf;

//Models/tables
var usermodeles = require('../models/user.js')(Bookshelf);
var clientmodeles = require('../models/client.js')(Bookshelf);
var suppliermodeles = require('../models/supplier.js')(Bookshelf);

db.User  = usermodeles.User  
db.Client  = clientmodeles.Client  
db.Supplier  = suppliermodeles.Supplier  
module.exports = db;