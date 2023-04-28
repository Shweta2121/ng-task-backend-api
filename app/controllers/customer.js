const express = require('express');
const router = express.Router();
const _ = require('lodash');
const customerModel = require('../models/customerModel');

/* Get all the CUSTOMERS */
router.get('/customers', (req, res) => {
	try{
        customerModel.getAllCustomers((err, customerResult) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            } else {
                res.status(200).send({status: true, message: 'Customer list get successfully.', data: customerResult})
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }    
})

/* Add new CUSTOMER */
router.post('/addcustomer', (req, res) => {
	try{
        customerModel.customerExistOrNot(req.body.Email, (err, customerResult) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            } else {
                if(customerResult.length>0){
                    res.status(200).send({status: true, message: 'This email is belongs to another customer.'})
                }else{
                    customerModel.insertCustomerDetails(req.body, (err, customerResult) => {
                        if (err) {
                            res.send({status: false, message: err.code, error: err});
                        } else {
                            res.status(200).send({status: true, message: 'Customer added successfully.'})
                        }
                    })
                }
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }      
})

/* get a particular CUSTOMER */
router.get('/customersdetails/:Id', (req, res) => {
	try{
        customerModel.getCustomerDetails(req.params.Id, (err, customerResult) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            } else {
                res.status(200).send({status: true, message: 'Customer data get successfully.', data: customerResult})
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }    
})

/* Edit CUSTOMER */
router.post('/updatecustomer', (req, res) => {
	try{
        customerModel.updateCustomer(req.body, (err, customerResp) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            }else{
                res.status(200).send({status: true, message: 'Customer data updated successfully.'})                
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }    
})

/* Delete CUSTOMER */
router.delete('/deletecustomer/:Id', (req, res) => {
    console.log('sdf')
    console.log(req.params.Id)
	try{
        customerModel.deleteCustomer(req.params.Id, (err, customerResult) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            } else {
                res.status(200).send({status: true, message: 'Customer deleted successfully.', data: customerResult})
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }    
})


module.exports = router;