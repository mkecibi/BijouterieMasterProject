'use strict';
module.exports = (Bookshelf) => {
var product_suppliermodeles = require('./product_supplier.js')(Bookshelf);
var ProductSupplier  = product_suppliermodeles.ProductSupplier  

var modeles = {}

// User model
var Supplier = Bookshelf.Model.extend({
    tableName: 'suppliers',
    products_suppliers: function () {
       return this.hasMany(ProductSupplier, 'supplier_id');
    }
});

Supplier.Suppliers = Bookshelf.Collection.extend({
  model: Supplier
});

modeles.Supplier  = Supplier

  return modeles;
};