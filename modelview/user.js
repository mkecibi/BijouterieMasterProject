"use strict";
class UserViewModel {
        static getInstance() {
        return new UserViewModel();
    }
    constructor() {
      	console.log("Inside UserViewModel Constructor");
    }
//**************************************************************************************** */
//**********************************getUsers******************************************* */    
//   getUsers(db,callback){
   getUsers(db){
            return  db.User.Users.forge()
                        .fetch()
                        .then(function (collection) {
                            return collection
                            //callback(collection);
                        })
                        .catch(function (err) {
                            return err ;//callback(''); 
                        });
    }
//**************************************************************************************** */
//**********************************getByUsername*********************************************** */
   getByUsername(db,username){
          return   db.User.query({where: {username:username}})
                    .fetch()
                    .then(function (user) {
                    if (user) {
                        return  user;
                    }
                    })
                    .catch(function (err) {
                        return err;
                    })
    }
//**************************************************************************************** */
//***************************** Add Update******************************************** */

    save(db,body) {
        return    db.User.forge({
                                        username:  body.username ,
                                        email: body.email,
                                        password:body.password ,
                                        bio:body.bio ,
                                        client_id:body.client_id ,
                                        isactive:body.isactive
            })
            .save()
            .then(function (User) {
            console.log("User saved with success");
        //   return  Product
            })
            .catch(function (err) {
                console.log("error to  saved : " + err.message);
            return err;
            }); 
        };
       
//***************************** Add Update******************************************** */
    update(db,body){
                return db.User.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (user) {
                                user.save({
                                        username:  body.username || user.get('username'),
                                        email: body.email || user.get('email'),
                                        password:body.password || user.get('password'),
                                        bio:body.bio || user.get('bio'),
                                        client_id:body.client_id|| user.get('client_id'),
                                        isactive:((body.isactive == "on") ? 1 : 0)
                                })
                                .then(function () {
                                      console.log("saved with success");
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
                return db.User.forge({id: id})
                                .fetch({require: true})
                                .then(function (user) {
                                user.destroy()
                                .then(function () {
                                      console.log("user successfully deleted");
                                })
                                .catch(function (err) {
                                    return err;
                                });
                                })
                                .catch(function (err) {
                                return err;});
                };
}
exports.UserViewModel = UserViewModel;