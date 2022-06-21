/*global db:false ISODate:false */
db.Users.insert({ "UserId" : "10", "name" : "belem", "email" :"belem@gmail.com", age : 49 });
 
db.Users.insert({ "UserId" : "20", "name" : "edson", "email" :"edson@gmail.com", age : 49 });
db.Users.insert({ "UserId" : "30", "name" : "lu", "email" :"lu@gmail.com", age : 46 });
db.Users.find();
