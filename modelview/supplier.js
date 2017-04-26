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
                        .catch(function (err) {
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
                    .catch(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getBySupplierWithproducts_suppliersid(db,id){
         // db.Bookshelf = require(db.env.ORM_NAME)(db.knex);
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
                          }).finally(function () {
                            //  console.log("Knex end connection db.Bookshelf.knex.destroy() ")
                           // db.Bookshelf.connection.destroy();
                            });
    }
//**************************************************************************************** */
//**************************************************************************************** */

    save(db,body) {
        return    db.Supplier.forge({
                                        username:  body.nameadd || supplier.get('name'),
                                        email: body.emailadd || supplier.get('email'),
                                        website: body.websiteadd || supplier.get('website'),
                                        address:body.addressadd || supplier.get('address'),
                                        tel:body.teladd || supplier.get('tel'),
                                        tyope: body.typeadd || supplier.get('type'),
                                        isactive:((body.isactiveadd == "on") ? 1 : 0)
            })
            .save()
            .then(function (supplier) {
            console.log("supplier saved with success");
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
                return db.Supplier.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (supplier) {
                                supplier.save({
                                        username:  body.nameedit || supplier.get('name'),
                                        email: body.emailedit || supplier.get('email'),
                                        website: body.websiteedit || supplier.get('website'),
                                        address:body.addressedit || supplier.get('address'),
                                        tel:body.teledit || supplier.get('tel'),
                                        tyope: body.typeedit || supplier.get('type'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
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
//**************************************************************************************** */
    delete(db,id){
                return db.Supplier.forge({id: id})
                                .fetch({require: true})
                                .then(function (supplier) {
                                supplier.destroy()
                                .then(function () {
                                      console.log("supplier successfully deleted");
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