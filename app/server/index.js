import app from './app';

// set the port based on environment or use default if not set
const PORT = process.env.SERVER_PORT || 3030;

// start the server
app.listen(PORT, () => { // TODO: move into an index.js and rename this app.js
  console.log(`See the magic on port ${PORT}!`)
});