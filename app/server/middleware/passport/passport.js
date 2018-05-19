// === import modules
import passport from 'passport';

// === import local files
import local from './localStrat';
import GoogleStrategy from './googleStrat';
import db from '../../../database/helpers/userHelpers';

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===');
	console.log(user); // raw user object
	console.log('---------');
	done(null, user.user_id);
});

passport.deserializeUser((user, done) => {
	console.log('Deserialize ... called');
	db.fetchUser(user)
		.then((err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(err, user)
		}
	);
});

// ==== Register Strategies ====
passport.use(local);
passport.use(GoogleStrategy);

export default passport;