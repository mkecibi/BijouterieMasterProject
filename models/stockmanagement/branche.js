'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Branche = Bookshelf.Model.extend({
    tableName: 'branches'
});

Branche.Branches = Bookshelf.Collection.extend({
  model: Branche
});

modeles.Branche  = Branche

  return modeles;
};