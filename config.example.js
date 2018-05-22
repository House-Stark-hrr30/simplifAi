// === creating pseudo env variables ===
export const SESSION_SECRET = "";

export const GOOGLE_CLIENT_ID = "";
export const GOOGLE_CLIENT_SECRET = "";

export const SERVER_PORT = 0;

// === for database configuration ===
export const db_config = {
  "development": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  },
  "test": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": ""
  }
};

// === for google sheets importing ===
export const client_secret = {
  "installed":
    {
      "client_id":"",
      "project_id":"",
      "auth_uri":"",
      "token_uri":"",
      "auth_provider_x509_cert_url": "",
      "client_secret":"",
      "redirect_uris":
        [
          "",
          ""
        ]
    }
};

export const credentials = {
  "access_token":"",
  "token_type":"",
  "refresh_token":"",
  "expiry_date": 0
};