"use strict";
const routeBase = require("./routes");
const  brancheProductViewModel = require('./../modelview/branches_products.js');
const productProductVML = brancheProductViewModel.BrancheProductViewModel.getInstance() ;

class BrancheProductRoute extends routeBase.BaseRoute {
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
exports.BrancheProductRoute = BrancheProductRoute;