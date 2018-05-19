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

// === use google strategy for registration ===
user.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

user.get('/auth/google/callback', passport.authenticate('google'));

// === register new user with local strategy ===
user.post('/signup', [
  // create validation rules
  check('email').isEmail(),
  check('password').isLength({min: 5, max: 20}),
  check('firstName').isLength({min: 1}),
  check('lastName').isLength({min: 1}),
  ],
  (req, res) => {
    // check for validation errors
    console.log("Checking for errors in: ");
    console.log(req.body);
    const errs = validationResult(req.body);
    if (!errs.isEmpty()) {
      console.log("E R R O R S");
      console.log(errs.array());
      return res.status(422).json(errs);
    }
    // if no errors
    const user = {};
    user.email = req.body.credentials.email;
    user.password = req.body.credentials.password;
    user.first_name = req.body.credentials.firstName;
    user.last_name = req.body.credentials.lastName;

    db.createUser(user)
      .then((user) => {
        console.log(`User ${user} created.  Logging in...`);
        console.log(user.dataValues)
        req.login(user.dataValues, err => {if (err) {throw err;}});
        console.log('Logged in.');
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
user.post('/login',
  (req, res, next) => {
    db.fetchUser(req.body)
      .then(user => {
        console.log(user); /* Why is user null?? */
        console.log("Hashing password...");
        return user.checkPassword(req.body.password);
      })
      .then((req, res, err) => {
        if(err) {console.log(err)}
        console.log("Logging in...");
        req.logIn(req.body, err => {if (err) {throw err;}});
        console.log("Logged in!!");
        res.status(200);
        res.json(user);
      })
      .catch((err) => res.status(400).json(err));
  }
);

user.post('/logout',
  (req, res, next) => {
    req.logout();
});

export default user;