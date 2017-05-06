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
   getproducts_suppliers(db){
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
    save(db,body) {
        return    db.ProductSupplier.forge({
                                        product_id:  body.product_idadd || productsupplier.get('product_id'),
                                        supplier_id: body.supplier_idadd || productsupplier.get('supplier_id'),
                                        isactive:((body.isactiveadd == "on") ? 1 : 0)
            })
            .save()
            .then(function (productsupplier) {
            console.log("productsupplier saved with success");
        //   return  supplier
            })
            .catch(function (err) {
                console.log("error to  saved : " + err.message);
            return err;
            }); 
        };

//***************************** Add Update******************************************** */
//***************************** Add Update******************************************** */
    update(db,body){
                return db.ProductSupplier.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (productsupplier) {
                                productsupplier.save({
                                        product_id:  body.product_idedit || productsupplier.get('product_id'),
                                        supplier_id: body.supplier_idedit || productsupplier.get('supplier_id'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
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

//***************************** Add Update******************************************** */
//**************************************************************************************** */
    delete(db,id){
                return db.ProductSupplier.forge({id: id})
                                .fetch({require: true})
                                .then(function (productsupplier) {
                                productsupplier.destroy()
                                .then(function () {
                                      console.log("productsupplier successfully deleted");
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