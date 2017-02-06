const admin = require('firebase-admin')
const { join } = require('path')
const cert = join(__dirname, '../service.json')

admin.initializeApp({
  credential: admin.credential.cert(cert),
  databaseURL: "https://devcriollo.firebaseio.com"
});

module.exports = admin.database()
