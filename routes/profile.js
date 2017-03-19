
"use strict";
const routeBase = require("./routes");
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
            req.user.displayName = req.body.displayname;
            req.user.bio = req.body.bio;
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