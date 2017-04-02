'use strict';
module.exports = (Bookshelf) => {
var product = require('./product.js')(Bookshelf);
var Product  = product.Product 

var modeles = {}

// User model
var ProductHeader = Bookshelf.Model.extend({
    tableName: 'productheaders',
    products: function () {
       return this.hasMany(Product, 'productheader_id');
    }
});

ProductHeader.ProductHeaders = Bookshelf.Collection.extend({
  model: ProductHeader
});

modeles.ProductHeader  = ProductHeader

  return modeles;
};