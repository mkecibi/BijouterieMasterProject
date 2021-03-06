'use strict';
module.exports = (Bookshelf) => {

var usermodeles = require('./user.js')(Bookshelf);
var User  = usermodeles.User  
 
var modeles = {}

// User model
var Client = Bookshelf.Model.extend({
    tableName: 'clients',
    users: function () {
       return this.hasMany(User, 'client_id');
    }
});

Client.Clients = Bookshelf.Collection.extend({
  model: Client
});

modeles.Client  = Client

  return modeles;
};