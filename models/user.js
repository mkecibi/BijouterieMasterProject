
module.exports = (Bookshelf) => {

var modeles = {}

// User model
var User = Bookshelf.Model.extend({
    tableName: 'users'
});

User.Users = Bookshelf.Collection.extend({
  model: User
});

modeles.User  = User

  return modeles;
};