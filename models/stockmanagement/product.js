'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Product = Bookshelf.Model.extend({
    tableName: 'products'
});

Product.Products = Bookshelf.Collection.extend({
  model: Product
});

modeles.Product  = Product

  return modeles;
};