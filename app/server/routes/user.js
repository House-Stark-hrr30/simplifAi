// import node modules
import { Router } from 'express';
import { check, validationResult } from 'express-validator/check';

// import local files
import db from '../../database/helpers/userHelpers';

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
  check('firstName').isAlpha(),
  check('lastName').isLength({min: 1}),
  check('firstName').isAlpha()
  ],
  (req, res) => {
    // check for errors
    const errs = validationResult(req);
    if (!errs.isEmpty()) {
      res.status(422).json({errors: errs.array()});
    }
    // if no errors
    const user = {};
    user.email = req.body.email;
    user.password = req.body.password;
    user.first_name = req.body.firstName;
    user.last_name = req.body.lastName;

    db.createUser(user)
      .then(user => {
        console.log(user)
        res.status(200);
        res.end(user);
      })
      .catch(err => {
        console.log(err)
        res.status(400);
        res.end("No user found with those credentials. Please try again!");
      });
});

// === sign in existing user ===
user.post('/login', (req, res) => {
  db.fetchUser(req.body)
    .then(user => {
      console.log(user)
      res.status(200);
      res.end(user);
    })
    .catch(err => {
      console.log(err)
      res.status(400);
      res.end("No user found with those credentials. Please try again!");
    });
});

export default user;