const express = require('express');
const router = express.Router();

const { signup, signin, signout, requireSignin} = require('../controllers/auth')

const { userSignupValidator } = require('../validator')

router.post('/signup', userSignupValidator, signup); // we run the user validator first before signup
router.post('/signin', signin);
router.get('/signout', signout);



module.exports = router;