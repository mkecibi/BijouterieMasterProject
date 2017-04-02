
module.exports = (Bookshelf) => {

var modeles = {}

// User model
var User = Bookshelf.Model.extend({
    tableName: 'users',
    client: function () {
      return this.belongsTo(Client, 'client_id');
    },
    branches_users: function () {
       return this.hasMany(BrancheUser, 'user_id');
    }
});

User.Users = Bookshelf.Collection.extend({
  model: User
});

modeles.User  = User

  return modeles;
};