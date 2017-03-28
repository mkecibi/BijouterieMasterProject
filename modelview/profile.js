"use strict";
class ProfileViewModel {
        static getInstance() {
        return new ProfileViewModel();
    }
    constructor() {
      	
    }
save(db,body){

return db.User.forge({id: body.id})
                .fetch({require: true})
                .then(function (user) {
                user.save({
                        username:  body.username || user.get('username'),
                        email: body.email || user.get('email'),
                        password:body.password || user.get('password'),
                        bio:body.bio || user.get('bio'),
                        client_id:body.client_id || user.get('client_id'),
                        isactive:body.isactive || user.get('isactive')
                })
                .then(function () {
                })
                .catch(function (err) {
                    return err;
                });
                })
                .catch(function (err) {
                   return err;});



  /****  user.save(function(err) {
              if (err) {
                next(err);
                return;
              }
              req.flash("info", "Profile updated!");
              res.redirect("/edit");
            });****/

    /* user.save(function (err) {
                    if (err) {
                       // next(err);
                        //return;
                        callback('');
                    }
                    console.log("allo  im here  ");
                    callback (user);
                });*/
};
}
exports.ProfileViewModel = ProfileViewModel;