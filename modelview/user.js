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
    save(db,body){
                return db.User.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (user) {
                                user.save({
                                        username:  body.usernameadd || user.get('username'),
                                        email: body.emailadd || user.get('email'),
                                        password:body.passwordadd || user.get('password'),
                                        bio:body.bioadd || user.get('bio'),
                                        client_id:body.client_idadd || user.get('client_id'),
                                        isactive:body.isactiveadd || user.get('isactive')
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

//***************************** Add Update******************************************** */
    update(db,body){
                return db.User.forge({id: body.id})
                                .fetch({require: true})
                                .then(function (user) {
                                user.save({
                                        username:  body.usernameedit || user.get('username'),
                                        email: body.emailedit || user.get('email'),
                                        password:body.passwordedit || user.get('password'),
                                        bio:body.bioedit || user.get('bio'),
                                        client_id:body.client_idedit || user.get('client_id'),
                                        isactive:((body.isactiveedit == "on") ? 1 : 0)
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