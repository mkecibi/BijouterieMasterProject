'use strict';
module.exports = (Bookshelf) => {
var product = require('./product.js')(Bookshelf);
var Product  = product.Product 
var branche = require('./branche.js')(Bookshelf);
var Branche  = branche.Branche  
var modeles = {}

// User model
var BrancheProduct = Bookshelf.Model.extend({
    tableName: 'branches_products',
    products: function () {
        return this.belongsToMany(Product);
    },
    branches: function () {
        return this.belongsToMany(Branche);
    }
});

BrancheProduct.BrancheProducts = Bookshelf.Collection.extend({
  model: BrancheProduct
});

modeles.BrancheProduct  = BrancheProduct

  return modeles;
};