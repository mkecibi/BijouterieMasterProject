"use strict";
class SupplierViewModel {
        static getInstance() {
        return new SupplierViewModel();
    }
    constructor() {
      	console.log("Inside SupplierViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getSuppliers(db){
            return  db.Supplier.Suppliers.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                        })
                        .otherwise(function (err) {
                            return err ;
                        });
    }
//**************************************************************************************** */
//**********************************getByClientid*********************************************** */
   getBySupplierid(db,id){
          return   db.Supplier.query({where: {id:id}})
                    .fetch()
                    .then(function (supplier) {
                    if (supplier) {
                        return  supplier;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getBySupplierWithproducts_suppliersid(db,id){
          return   db.Supplier.forge({id:id})
                        .fetch({withRelated: ['products_suppliers']})
                        .then(function (supplier) {
                        if (!supplier) {
                           return err;
                        }
                        else {
                            return supplier;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.Supplier.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (supplier) {
                                supplier.save({
                                        username:  body.name || supplier.get('name'),
                                        email: body.email || supplier.get('email'),
                                        website: body.website || supplier.get('website'),
                                        address:body.address || supplier.get('address'),
                                        tel:body.tel || supplier.get('tel'),
                                        tyope: body.type || supplier.get('type'),
                                        isactive:body.isactive || supplier.get('isactive')
                                })
                                .then(function () {
                                      console.log("Supplier saved with success");
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
exports.SupplierViewModel = SupplierViewModel;