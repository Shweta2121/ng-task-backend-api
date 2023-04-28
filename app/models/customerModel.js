var db = require('../../config/database'); //reference of dbconnection.js

let CustomerMaster = {
    getAllCustomers: (callback) => {
        let query = `SELECT * FROM customermaster`;
        return db.query(query, callback);
    },

    /* Check customer with the Email exist or not */
    customerExistOrNot: (Email, callback) => {
        let query = `SELECT * FROM customermaster WHERE Email = '`+Email+`'`;
        db.query(query, callback);
    },

    /* Add new Customer */
    insertCustomerDetails: (BODY, callback) => {
        let query = `INSERT INTO customermaster (Full_Name, Email, Phone, Address) values ('`+BODY.Full_Name+`', '`+BODY.Email+`', '`+BODY.Phone+`', '`+BODY.Address+`')`;
        db.query(query, callback);
    },

    /* Edit Customer */
    updateCustomer: (BODY, callback) => {
        let query = `UPDATE customermaster SET Full_Name='`+BODY.Full_Name+`', Phone='`+BODY.Phone+`', Address='`+BODY.Address+`' WHERE Id='`+BODY.Id+`'`;
        db.query(query, callback);
    },

    /* Delete Customer */
    deleteCustomer: (Id, callback) => {
        let query = `UPDATE customermaster SET Status='Inactive' WHERE Id=${Id}`;
        db.query(query, callback);
    },

    /*  get customer*/
    getCustomerDetails: (Id, callback) => {
        let query = `SELECT * FROM customermaster where Id='`+Id+`'`;
        return db.query(query, callback);
    },

};
module.exports = CustomerMaster;