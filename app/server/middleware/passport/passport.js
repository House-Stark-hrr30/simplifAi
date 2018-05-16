// === import modules
import passport from 'passport';

// === import local files
import LocalStrategy from './localStrat';
// import GoogleStrategy from './googleStrat';
import User from '../../../database/models/user';

passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===');
	console.log(user); // raw user object
	console.log('---------');
	done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called');
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			console.log('======= DESERILAIZE USER CALLED ======')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	);
});

// ==== Register Strategies ====
passport.use(LocalStrategy);
// passport.use(GoogleStratgey);

export default passport;