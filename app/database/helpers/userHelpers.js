// import database
import db from '../models/index.js';

// === U S E R ===
// returns a promise that contains the user object
db.fetchUser = ({email}) => {
  console.log("Fetching user...");
  return db.User.findOne({where: {email: email}});
};

db.createUser = (userObj) => {
  console.log('Creating user...');
  return db.User.build(userObj)
    .save();
};

export default db;