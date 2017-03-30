
"use strict";
const routeBase = require("./routes");
const  userViewModel = require('./../modelview/user.js');
var userVML = userViewModel.UserViewModel.getInstance() ;
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
            
           userVML.save(db,req.body).then(function () {
                            req.flash("info", "Profile updated!");
                            res.redirect("/edit");
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                })
                 .catch(function (err) {
                res.status(500).json({error: true, data: {message: err.message}});
                });
        });
    }
}
exports.ProfileRoute = ProfileRoute;