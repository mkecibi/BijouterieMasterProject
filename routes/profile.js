
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

               db.User.forge({id: req.body.id})
                .fetch({require: true})
                .then(function (user) {
                user.save({
                        username:  req.body.username || user.get('username'),
                        email: req.body.email || user.get('email'),
                        password:req.body.password || user.get('password'),
                        bio:req.body.bio || user.get('bio'),
                        client_id:req.body.client_id || user.get('client_id'),
                        isactive:req.body.isactive || user.get('isactive')
                })
                .then(function () {
                    res.json({error: false, data: {message: 'User details updated'}});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
                })
                .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
                });





           /* profileVML.save(req.user).then(function (err) {
                    if (err) {
                        next(err);
                        return;
                    }
                    req.flash("info", "Profile updated!");
                    res.redirect("/edit");
                });*/

          /*req.user.save(function(err) {
              if (err) {
                next(err);
                return;
              }
              req.flash("info", "Profile updated!");
              res.redirect("/edit");
            });*/
        });
    }
}
exports.ProfileRoute = ProfileRoute;