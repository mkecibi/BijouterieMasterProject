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
//**************************************************************************************** */

    save(db,body) {
        return    db.BrancheUser.forge({
                                        user_id:  body.user_idadd || brancheuser.get('user_id'),
                                        branche_id: body.branche_idadd || brancheuser.get('branche_id'),
                                        isactive:((body.isactiveadd == "on") ? 1 : 0)
            })
            .save()
            .then(function (brancheuser) {
            console.log("brancheuser saved with success");
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
                return db.BrancheUser.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (brancheuser) {
                                brancheuser.save({
                                        user_id:  body.user_idedit || brancheuser.get('user_id'),
                                        branche_id: body.branche_idedit || brancheuser.get('branche_id'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
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

//***************************** Add Update******************************************** */
//**************************************************************************************** */
    delete(db,id){
                return db.BrancheUser.forge({id: id})
                                .fetch({require: true})
                                .then(function (brancheuser) {
                                brancheuser.destroy()
                                .then(function () {
                                      console.log("brancheuser successfully deleted");
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