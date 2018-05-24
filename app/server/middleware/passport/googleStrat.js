//import modules
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
// import local files
import User from '../../../database/models/user'; //todo: verify db route

let GOOGLE_CLIENT_ID;
let GOOGLE_CLIENT_SECRET;

if(process.env.NODE_ENV === 'production') {
  GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
} else {
  GOOGLE_CLIENT_ID = require('../../../config').GOOGLE_CLIENT_ID;
  GOOGLE_CLIENT_SECRET = require('../../../config').GOOGLE_CLIENT_SECRET;
}


//const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || require('../../../../config').GOOGLE_CLIENT_ID;
//const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || require('../../../../config').GOOGLE_CLIENT_SECRET;

const strategy = new GoogleStrategy(
	{
		clientID: GOOGLE_CLIENT_ID,
		clientSecret: GOOGLE_CLIENT_SECRET,
		callbackURL: '/auth/google/callback'
	},
	function(token, tokenSecret, profile, done) {
		// testing
		console.log('===== GOOGLE PROFILE =======')
		console.log(profile)
		console.log('======== END ===========')
		// code
		const { id, name, photos } = profile
		User.findOne({ 'googleId': id }, (err, userMatch) => {
			// handle errors here:
			if (err) {
				console.log('Error!! trying to find user with googleId')
				console.log(err)
				return done(null, false)
			}
			// if there is already someone with that googleId
			if (userMatch) {
				return done(null, userMatch)
			} else {
				// if no user in our db, create a new user with that googleId
				console.log('====== PRE SAVE =======')
				console.log(id)
				console.log(profile)
				console.log('====== post save ....')
				const newGoogleUser = new User({
					'googleId': id,
					firstName: name.givenName,
					lastName: name.familyName,
				})
				// save this user
				newGoogleUser.save((err, savedUser) => {
					if (err) {
						console.log('Error!! saving the new google user')
						console.log(err)
						return done(null, false)
					} else {
						return done(null, savedUser)
					}
				}) // closes newGoogleUser.save
			}
		}) // closes User.findONe
	}
)

export default strategy;
