// import modules
import { Strategy as LocalStrategy } from 'passport-local';

// import local files
import User from '../../../database/models/user';

const local = new LocalStrategy(
	function(email, password, done) {
		console.log(email);
		console.log(password);
		User.findOne({ email: email }, (err, user) => {
			if (err) {
				console.log(`\n${err}\n`);
				return done(err);
			}
			if (!user) {
				console.log('\nBAD USERNAME!!!\n');
				return done(null, false, { message: 'Incorrect email' });
			}
			if (!user.checkPassword(password)) {
				console.log('\nBAD PASSWORD!!!\n');
				return done(null, false, { message: 'Incorrect password' });
			}
			return done(null, user);
		});
	}
);

export default local;
