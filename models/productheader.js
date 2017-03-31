'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var ProductHeader = Bookshelf.Model.extend({
    tableName: 'productheaders',
    products: function () {
       return this.hasMany(product, 'productheader_id');
    }
});

Product.ProductHeaders = Bookshelf.Collection.extend({
  model: ProductHeader
});

modeles.ProductHeader  = ProductHeader

  return modeles;
};