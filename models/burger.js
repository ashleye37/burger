// import orm.js into burger.js
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = 
{

  selectAll: function(callback)
  {
    orm.selectAll(function(res)
    {
      callback(res);
    });
  },

  insertOne: function(name, callback)
  {
    orm.insertOne(name, function(res)
    {
      callback(res);
    });
  },

  updateOne: function(burger_id, callback)
  {
    orm.updateOne(burger_id, function(res)
    {
      callback(res);
    });
  }

};


// Export at the end of the burger.js file.
module.exports = burger;
