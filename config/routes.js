//you can include all your controllers

/*Route for Admin Only*/
const AdminUser = require('../app/controllers/adminuser') 
const Customer = require('../app/controllers/customer') 

module.exports = function(app) {
    app.get('/', function(req, res, nex) {
        res.json("Welcome to API Portal...!")
    });

    

    /*Route for Admin Only*/
    app.use('/api/adminuser', AdminUser);
    app.use('/api/customer', Customer); 

    //catch 404 and forward to error handler
    app.use(function(req, res, next) {
        res.status(404).render('404', { title: "Sorry, page not found", session: req.sessionbo });
    });

    app.use(function(req, res, next) {
        res.status(404).send( "404 page not found" );
    });
}