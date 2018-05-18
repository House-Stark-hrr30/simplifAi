// import modules
import { Strategy as LocalStrategy } from 'passport-local';

// import local files
import User from '../../../database/models/user';

const local = new LocalStrategy(
	function(email, password, done) {
		User.findOne({ 'local.email': email }, (err, userMatch) => {
			if (err) {
				return done(err);
			}
			if (!userMatch) {
				return done(null, false, { message: 'Incorrect email' });
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' });
			}
			return done(null, userMatch);
		});
	}
);

export default local;
