"use strict";

const routeBase = require("./routes");
const  productViewModel = require('./../modelview/product.js');
const productVML = productViewModel.ProductViewModel.getInstance() ;

class ProductRoute extends routeBase.BaseRoute {
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

        router.get('/products',function (req, res) {
            productVML.getProducts(db)
            .then(function (collection) {
            if (!collection) {
                res.status(404).json({error: true, data: {}});
            }
            else {
                res.render("product", { products: collection.toJSON() });
            }
            })
            .catch(function (err) {
            res.status(500).json({error: true, data: {message: err.message}});
            });
  });
    }
}
exports.ProductRoute = ProductRoute;