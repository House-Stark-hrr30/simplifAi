// import node modules
import { Router } from 'express';
import { check, validationResult } from 'express-validator/check';

// import local files
import db from '../../database/helpers/userHelpers';
import passport from '../middleware/passport/passport';
// import { INSPECT_MAX_BYTES } from 'buffer'; // ? How did this end up in here?  Did I accidentally change it from something else?

// initialize express router
const user = Router();

// === get user info ===
user.get('/:email', (req, res) => {
  console.log("Getting user...");
  console.log(req.body);
  res.statusCode = 200;
  res.end();
});

// === register new user ===
user.post('/signup', [
  // create validation rules
  check('email').isEmail(),
  check('password').isLength({min: 5, max: 20}),
  check('firstName').isLength({min: 1}),
  // check('firstName').isAlpha(),
  check('lastName').isLength({min: 1}),
  // check('lastName').isAlpha()
  ],
  (req, res) => {
    // check for errors
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      console.log("E R R O R S");
      console.log(errs.array());
      return res.status(422).json(errs);
    }
    // if no errors
    const user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    user.first_name = req.body.firstName;
    user.last_name = req.body.lastName;

    db.createUser(user)
      .then((user) => {
        console.log(user.dataValues)
        req.login(user.email, err => {if (err) {throw err;}});
        res.status(200);
        res.json(user.dataValues);
      })
      .catch(err => {
        console.log(err)
        res.status(400);
        res.json("Error creating user with those credentials. Please try again!");
      });
});

// === sign in existing user ===
user.post('/login', (req, res) => {
  passport.authenticate("local")
    .then(user => {
      // console.log(typeof user.email);
      // req.logIn(user.email, err => {if (err) {throw err;}}); // ! I think this can be deleted
      res.status(200);
      res.json(user);
    })
    .catch(err => {
      console.log(err)
      res.status(400);
      res.end("No user found with those credentials. Please try again!");
    });
});

export default user;