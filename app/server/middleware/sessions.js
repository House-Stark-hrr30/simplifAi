const expressSessionSettings = {
  secret: process.env.SESSION_SECRET || "I_am_a_secret",
  resave: false, // only saves on update
  saveUninitialized: false // only saves on login
};

export default expressSessionSettings;