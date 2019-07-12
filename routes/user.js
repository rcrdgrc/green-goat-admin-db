const express = require('express');
const router = express.Router();

const { requireSignin, isAdmin, isAuth} = require('../controllers/auth')
const { userById } = require('../controllers/user')

router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    }) //if the user id is signed in we return profile
})

router.param('userId', userById)

module.exports = router;