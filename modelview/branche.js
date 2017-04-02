"use strict";
class BrancheViewModel {
        static getInstance() {
        return new BrancheViewModel();
    }
    constructor() {
      	console.log("Inside BrancheViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getBranches(db){
            return  db.Branche.Branches.forge()
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
   getBrancheByid(db,id){
          return   db.Branche.query({where: {id:id}})
                    .fetch()
                    .then(function (branche) {
                    if (branche) {
                        return  branche;
                    }
                    })
                    .otherwise(function (err) {
                        return err;
                    })
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByBrancheWithproducts_brancheid(db,id){
          return   db.Branche.forge({id:id})
                        .fetch({withRelated:['branches_users','branches_products']})
                        .then(function (branche) {
                        if (!branche) {
                           return err;
                        }
                        else {
                            return branche;
                        }
                        })
                        .catch(function (err) {
                            return err;
                    });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.Branche.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (branche) {
                                branche.save({
                                        name:  body.name || branche.get('name'),
                                        address:body.address || branche.get('address'),
                                        isactive:body.isactive || branche.get('isactive')
                                })
                                .then(function () {
                                      console.log("branche saved with success");
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
exports.BrancheViewModel = BrancheViewModel;