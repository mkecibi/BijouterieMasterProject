
"use strict";
const routeBase = require("./routes");
const  profileViewModel = require('./../modelview/profile.js');
var profileVML = profileViewModel.ProfileViewModel.getInstance() ;
class ProfileRoute extends routeBase.BaseRoute {

    constructor() {
        super();
    }

    profile(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }

    static create(router,db) {
        router.get("/edit", this.prototype.ensureAuthenticated, function(req, res) {
            res.render("edit");
        });

        router.post("/edit", this.prototype.ensureAuthenticated, function(req, res, next) {
            req.user.username = req.body.username;
            req.user.email = req.body.email;
            req.user.password = req.body.password;
            req.user.bio = req.body.bio;
            req.user.client_id = req.body.client_id;
            req.user.isactive = req.body.isactive;
           /* profileVML.save(req.user).then(function (err) {
                    if (err) {
                        next(err);
                        return;
                    }
                    req.flash("info", "Profile updated!");
                    res.redirect("/edit");
                });*/

           req.user.save(function(err) {
              if (err) {
                next(err);
                return;
              }
              req.flash("info", "Profile updated!");
              res.redirect("/edit");
            });
        });
    }
}
exports.ProfileRoute = ProfileRoute;