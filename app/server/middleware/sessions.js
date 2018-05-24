let secret;

//import secret from config
if(process.env.NODE_ENV === 'production') {
  secret = process.env.SESSION_SECRET;
} else {
  secret = "I_am_a_secret";
}

const expressSessionSettings = {
  secret: secret,
  resave: false, // only saves on update
  saveUninitialized: false // only saves on login
};

export default expressSessionSettings;