"use strict";
const routeBase = require("./routes");
const  brancheUserViewModel = require('./../modelview/branche_user.js');
const brancheUserVML = brancheUserViewModel.BrancheUserViewModel.getInstance() ;

class BrancheUserRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }

    user(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "xxxxxxxxx", options);
    }

    static create(router,db) {

    }
}
exports.BrancheUserRoute = BrancheUserRoute;