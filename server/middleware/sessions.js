expressSessionSettings = {
  secret: process.env.SESSION_SECRET || "I_am_a_secret",
  resave: true,
  saveUninitialized: true
};

export default expressSessionSettings;