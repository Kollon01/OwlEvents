const firebase = require("firebase-admin");

const credentials = require("../config/credentials.json");

firebase.initializeApp({
  credential: firebase.credential.cert(credentials),
  databaseURL: "https://owlevents-api.firebaseio.com",
});

module.exports = firebase;