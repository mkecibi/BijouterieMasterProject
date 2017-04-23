"use strict";
class BrancheUserViewModel {
        static getInstance() {
        return new BrancheUserViewModel();
    }
    constructor() {
      	console.log("Inside BrancheUserViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
   getbranches_users(db){
            return  db.BrancheUser.BrancheUsers.forge()
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
   getByBrancheUserid(db,id){
          return   db.BrancheUser.query({where: {id:id}})
                    .fetch()
                    .then(function (brancheUser) {
                        if (brancheUser) {
                            return  brancheUser;
                        }
                        })
                        .catch(function (err) {
                            return err;
                        });
    }

//**************************************************************************************** */
//**********************************getByClientid Withrelated Users*********************************************** */
   getByBrancheUserWithrelatedByid(db,id){
          return   db.BrancheUser.forge({id:id})
                        .fetch({withRelated: ['']})
                        .then(function (brancheUser) {
                            if (brancheUser) {
                                return  brancheUser;
                            }
                            })
                            .catch(function (err) {
                                return err;
                            });
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */
    save(db,body){
                return db.BrancheUser.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (brancheuser) {
                                brancheuser.save({
                                        user_id:  body.user_id || brancheuser.get('user_id'),
                                        branche_id: body.branche_id || brancheuser.get('branche_id'),
                                        isactive:body.isactive || brancheuser.get('isactive')
                                })
                                .then(function () {
                                      console.log("brancheuser saved with success");
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
exports.BrancheUserViewModel = BrancheUserViewModel;