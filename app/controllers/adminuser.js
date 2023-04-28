const express = require('express');
const router = express.Router();
const userModel = require('../models/adminuserModel');

/* Sign In with OTP */
router.post('/Login', (req, res) => {
	try{
        userModel.checkAdminUserExistOrNot(req.body.User_Name, (err, checkResult) => {
            if (err) {
                res.send({status: false, message: err.code, error: err});
            } else {
                if(checkResult.length>0){
                    if(checkResult[0].Password == req.body.Password){
                        userModel.getAdminUserDetails(req.body.User_Name, (err, usrResult) => {
                            if (err) {
                                res.send({status: false, message: err.code, error: err});
                            } else {
                                res.status(200).send({status: true, message: 'Admin user details found successfully.', data: usrResult})
                                
                            }
                        })
                    }else{
                        res.status(200).send({status: false, message: 'You have entered wrong Password.'})
                    }
                }else{
                    res.status(200).send({status: false, message: 'Admin user does not exist.'})
                }
            }
        })
    } catch (err) {
        res.status(500).send(err);
    }    
})

module.exports = router;