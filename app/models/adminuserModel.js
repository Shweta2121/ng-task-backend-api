var db = require('../../config/database'); //reference of dbconnection.js

let AdminUserMaster = {
    checkAdminUserExistOrNot: (User_Name, callback) => {
        let query = `SELECT * FROM usermaster WHERE User_Name = '` + User_Name + `' AND User_Type = 'Superadmin' AND Status = 'Active'`;
        console.log(query);
        return db.query(query, callback); 
    },

    getAdminUserDetails: (User_Name, callback) => {
        let query = `SELECT Id, User_Type, User_Name, Status FROM usermaster WHERE User_Name = '` + User_Name + `' AND User_Type = 'Superadmin' AND Status = 'Active'`;
        return db.query(query, callback);
    },
};
module.exports = AdminUserMaster;