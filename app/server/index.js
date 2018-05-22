import app from './app';
// import port
import { SERVER_PORT } from '../../config';


// set the port based on environment or use default if not set
const PORT = SERVER_PORT || 3000;

// start the server
app.listen(PORT, () => {
  console.log(`${(new Date()).toLocaleTimeString("en-US")}`)
  console.log(`See the magic on port ${PORT}!`)
});