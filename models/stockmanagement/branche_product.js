'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var BrancheProduct = Bookshelf.Model.extend({
    tableName: 'branches_products'
});

BrancheProduct.BrancheProducts = Bookshelf.Collection.extend({
  model: BrancheProduct
});

modeles.BrancheProduct  = BrancheProduct

  return modeles;
};