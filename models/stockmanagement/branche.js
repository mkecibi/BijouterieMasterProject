'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Branche = Bookshelf.Model.extend({
    tableName: 'branches',
    branches_users: function () {
       return this.hasMany(BrancheUser, 'branche_id');
    },
    branches_products: function () {
       return this.hasMany(BrancheProduct, 'branche_id');
    }
});

Branche.Branches = Bookshelf.Collection.extend({
  model: Branche
});

modeles.Branche  = Branche

  return modeles;
};