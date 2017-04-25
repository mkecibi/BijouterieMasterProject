"use strict";
class BrancheProductViewModel {
        static getInstance() {
        return new BrancheProductViewModel();
    }
    constructor() {
      	console.log("Inside BrancheProductViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getbranches_products(db){
            return  db.BrancheProduct.BrancheProducts.forge()
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
   getByBrancheProductid(db,id){
          return   db.BrancheProduct.query({where: {id:id}})
                    .fetch()
                    .then(function (brancheproduct) {
                        if (brancheproduct) {
                            return  brancheproduct;
                        }
                        })
                        .catch(function (err) {
                            return err;
                        });
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByBrancheProductWithrelatedByid(db,id){
          return   db.BrancheProduct.forge({id:id})
                        .fetch({withRelated: ['']})
                        .then(function (brancheproduct) {
                            if (brancheproduct) {
                                return  brancheproduct;
                            }
                            })
                            .catch(function (err) {
                                return err;
                            });
    }
//**************************************************************************************** */

//***************************** Add Update******************************************** */
//**************************************************************************************** */

    save(db,body) {
        return    db.BrancheProduct.forge({
                                        product_id:  body.product_idadd || brancheproduct.get('product_id'),
                                        branche_id: body.branche_idadd || brancheproduct.get('branche_id'),
                                        quantity:  body.quantityadd || brancheproduct.get('quantity'),
                                        isactive:((body.isactiveadd == "on") ? 1 : 0)
            })
            .save()
            .then(function (brancheproduct) {
            console.log("brancheproduct saved with success");
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
                return db.BrancheProduct.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (brancheproduct) {
                                brancheproduct.save({
                                        product_id:  body.product_idedit || brancheproduct.get('product_id'),
                                        branche_id: body.branche_idedit || brancheproduct.get('branche_id'),
                                        quantity:  body.quantityedit || brancheproduct.get('quantity'),
                                        isactive:body.isactiveedit || brancheproduct.get('isactive')
                                })
                                .then(function () {
                                      console.log("BrancheProduct saved with success");
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
                return db.BrancheProduct.forge({id: id})
                                .fetch({require: true})
                                .then(function (brancheproduct) {
                                brancheproduct.destroy()
                                .then(function () {
                                      console.log("brancheproduct successfully deleted");
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


//**************************************************************************************** */
//***************************** Add Update******************************************** */
exports.BrancheProductViewModel = BrancheProductViewModel;