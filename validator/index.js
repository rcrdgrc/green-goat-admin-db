exports.userSignupValidator = (req, res, next) => {  //once we check for errors we return next after whatever error if not app will hault
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'Email is required')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required').notEmpty()
    req.check('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')

    const errors = req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }
    next(); //everytime you have middelware you need next for app to know it can keep going after error
};

