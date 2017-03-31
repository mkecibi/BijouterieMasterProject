"use strict";
const routeBase = require("./../routes");
class SupplierRoute extends routeBase.BaseRoute {
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
exports.SupplierRoute = SupplierRoute;