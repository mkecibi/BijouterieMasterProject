"use strict";
class ProductSupplierViewModel {
        static getInstance() {
        return new ProductSupplierViewModel();
    }
    constructor() {
      	console.log("Inside ProductSupplierViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getproduct_supplier(db){
            return  db.ProductSupplier.ProductSuppliers.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                        })
                        .catch(function (err) {
                            return err ;
                        });
    }
//**************************************************************************************** */
//**********************************getByProductSupplierid*********************************************** */
   getByProductSupplierid(db,id){
          return   db.ProductSupplier.query({where: {id:id}})
                    .fetch()
                    .then(function (productsupplier) {
                    if (productsupplier) {
                        return  productsupplier;
                    }
                    })
                    .catch(function (err) {
                        return err;
                    });
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getBySProductSupplierWithrelatedByid(db,id){
          return   db.ProductSupplier.forge({id:id})
                        .fetch({withRelated: ['products_suppliers']})
                        .then(function (productsupplier) {
                            if (productsupplier) {
                                return  productsupplier;
                            }
                            })
                            .catch(function (err) {
                                return err;
                            });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.ProductSupplier.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (productsupplier) {
                                productsupplier.save({
                                        product_id:  body.product_id || productsupplier.get('product_id'),
                                        supplier_id: body.supplier_id || productsupplier.get('supplier_id'),
                                        isactive:body.isactive || productsupplier.get('isactive')
                                })
                                .then(function () {
                                      console.log("Productsupplier saved with success");
                                })
                                .catch(function (err) {
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                return err;});
                };
}

//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.ProductSupplierViewModel = ProductSupplierViewModel;