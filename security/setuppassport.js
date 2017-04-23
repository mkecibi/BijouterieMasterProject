const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require('./../config/db.js');
const userViewModel = require('./../modelview/user.js');
const userVML = userViewModel.UserViewModel.getInstance() ;


module.exports = function() {

//**************************************************************************************** */
//**********************************serializa and  deserialize *********************************************** */

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    db.User.forge({id:id})
		.fetch()
		.then(function (user) {
          done(null, user.toJSON());
		  });
	  });

//**************************************************************************************** */
//**********************************passport login*********************************************** */

  passport.use("login", new LocalStrategy(function(username, password, done) {
		                     console.log("login passport username " + username + password);
		//db.User.query({where: {username:username}, where:{password:password}})
				db.User.query({where: {username:username}}).query({where: {password:password}})
		.fetch()
		.then(function (user) {
		  if (!user) {
       return done(null, false, { message: "No user has that username! or  a Invalid password." });
		  }
		  else {
         return done(null, user.toJSON());
		  }
		})
		.catch(function (err) {
      return done(null, false, { message: "Invalid password." });
		})
  }));
};
