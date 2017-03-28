'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var BrancheUser = Bookshelf.Model.extend({
    tableName: 'branches_users'
});

BrancheUser.BrancheUsers = Bookshelf.Collection.extend({
  model: BrancheUser
});

modeles.BrancheUser  = BrancheUser

  return modeles;
};