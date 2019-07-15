const express = require('express');
const router = express.Router();

//user model
const User = require('../../models/User');

//@route GET api/users
//@desc Get All Users
//@access Public
router.get('/', (req,res) => {
    User.find()
        .then(users => res.json(users))
})

//@route POST api/users
//@desc POST a user
//@access Public
router.post('/', (req,res) => {
    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save()
            .then(user => res.json(user));
});

//@route DELETE api/users/:id
//@desc DELETE a user
//@access Public
router.delete('/:id', (req,res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success:'true'})))
        .catch(err => res.status(404).json({success:'false'}));
});

module.exports = router;