'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var BrancheUser = Bookshelf.Model.extend({
    tableName: 'branches_users',
    users: function () {
        return this.belongsToMany(User);
    },
    branches: function () {
        return this.belongsToMany(Branche);
    }
});

BrancheUser.BrancheUsers = Bookshelf.Collection.extend({
  model: BrancheUser
});

modeles.BrancheUser  = BrancheUser

  return modeles;
};