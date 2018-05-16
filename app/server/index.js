import app from './app';

// set the port based on environment or use default if not set
const PORT = process.env.SERVER_PORT || 3000;

// start the server
app.listen(PORT, () => {
  console.log(`See the magic on port ${PORT}!`)
});