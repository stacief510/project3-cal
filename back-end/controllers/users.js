var db = require('../models');

function index(req, res){
    console.log('GET user index')
    db.User.find({}, function(err, user){
        if(err){
            res.send(err);
        }
        return res.json(user);
    });
}

function create(req, res){
    console.log('POST user')
    console.log(req.body)
    db.User.create(req.body, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}

function show(req, res){
    console.log('GET one user')
    console.log(`req.params.id: ${req.params.id}`);
    db.User.findById(req.params.id, function(err,foundUser){
        res.json(foundUser);
    });
}

module.exports = {
    index: index,
    create: create,
    show: show
}