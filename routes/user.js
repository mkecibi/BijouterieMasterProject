"use strict";
const routeBase = require("./routes");
const  userViewModel = require('./../modelview/user.js');
const userVML = userViewModel.UserViewModel.getInstance() ;

const  clientViewModel = require('./../modelview/client.js');
const clientVML = clientViewModel.ClientViewModel.getInstance() ;
const  supplierViewModel = require('./../modelview/supplier.js');
const supplierVML = supplierViewModel.SupplierViewModel.getInstance();

const  productViewModel = require('./../modelview/product.js');
const productVML = productViewModel.ProductViewModel.getInstance() ;

const  brancheViewModel = require('./../modelview/branche.js');
const brancheVML = brancheViewModel.BrancheViewModel.getInstance() ;


class UserRoute extends routeBase.BaseRoute {
    constructor() {
        super();
    }
//**************************************************************************************** */
//**********************************user*********************************************** */
    user(req, res, next) {
        this.title = "Home | Tour of Heros";
        let options = {
            "message": "Welcome to the Tour of Heros"
        };
        this.render(req, res, "index", options);
    }
//**************************************************************************************** */
//**********************************Create router*********************************************** */
    static create(router,db) {
        router.get("/", this.prototype.ensureAuthenticated,function(req, res, next) {
                    userVML.getUsers(db).then(function (collection) {
                            res.render("index", { users: collection.toJSON() });
                        })
                        .catch(function (err) {
                            res.status(500).json({error: true, data: {message: err.message}});
                        });
        });
      router.get("/users/:username", function(req, res, next) {
                  var username = req.params.username;

                        userVML.getByUsername(db,username).then(function (user) {
                                  return  res.render("profile",{user:user.toJSON()});
                            })
                            .catch(function (err) {
                                res.status(500).json({error: true, data: {message: err.message}});
                            });
                        });

                        

router.get('/clients/:id',function (req, res) {
    console.log("Je suis la");
    clientVML.getByClientid(db,req.params.id)
     .then(function (client) {
      if (!client) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: client.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });


router.get('/suppliers/:id',function (req, res) {
    console.log("supplierVML Je suis la");
    supplierVML.getBySupplierWithproducts_suppliersid(db,req.params.id)
     .then(function (supplier) {
      if (!supplier) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: supplier.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });


router.get('/products/:id',function (req, res) {
    console.log("productVML Je suis la");
    productVML.getBySProductWithAll(db,req.params.id)
     .then(function (product) {
      if (!product) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: product.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });


router.get('/branches/:id',function (req, res) {
    console.log("brancheVML Je suis la");
    brancheVML.getByBrancheWithproducts_brancheid(db,req.params.id)
     .then(function (branche) {
      if (!branche) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: branche.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  });
    }
}
exports.UserRoute = UserRoute;