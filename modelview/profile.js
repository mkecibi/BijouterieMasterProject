"use strict";
class ProfileViewModel {
        static getInstance() {
        return new ProfileViewModel();
    }
    constructor() {
      	
    }
save(user){

    user.save(function(err) {
              if (err) {
                next(err);
                return;
              }
              req.flash("info", "Profile updated!");
              res.redirect("/edit");
            });
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