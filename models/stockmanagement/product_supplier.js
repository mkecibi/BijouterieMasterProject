'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var ProductSupplier = Bookshelf.Model.extend({
    tableName: 'products_suppliers'
});

ProductSupplier.ProductsSuppliers = Bookshelf.Collection.extend({
  model: ProductSupplier
});

modeles.ProductSupplier  = ProductSupplier

  return modeles;
};