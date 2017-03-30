'use strict';
module.exports = (Bookshelf) => {
  
var modeles = {}

// User model
var Supplier = Bookshelf.Model.extend({
    tableName: 'suppliers',
    branches_suppliers: function () {
       return this.hasMany(ProductSupplier, 'supplier_id');
    }
});

Product.Suppliers = Bookshelf.Collection.extend({
  model: Supplier
});

modeles.Supplier  = Supplier

  return modeles;
};