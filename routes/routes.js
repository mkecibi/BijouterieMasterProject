"use strict";
class BaseRoute {

    static create(router) {
        router.use(function(req, res, next) {
          console.log(req.user);
          res.locals.currentUser = req.user;
          res.locals.errors = req.flash("error");
          res.locals.infos = req.flash("info");
          next();
        });
    }

    constructor() {
        this.title = "Tour of Heros";
        this.scripts = [];
    }

   ensureAuthenticated  (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        req.flash("info", "You must be logged in to see this page.");
        res.redirect("/login");
    }
    }

    addScript(src) {
        this.scripts.push(src);
        return this;
    }
    render(req, res, view, options) {
        res.locals.BASE_URL = "/";
        res.locals.scripts = this.scripts;
        res.locals.title = this.title;
        res.render(view, options);
    }
}
exports.BaseRoute = BaseRoute;