'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Supplier = Bookshelf.Model.extend({
    tableName: 'suppliers'
});

Product.Suppliers = Bookshelf.Collection.extend({
  model: Supplier
});

modeles.Supplier  = Supplier

  return modeles;
};