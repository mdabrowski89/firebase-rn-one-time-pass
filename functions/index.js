const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user')
const serviceAccount = require('./service_account.json')
const requestOneTimePass = require('./request_one_time_pass')
const verifyOneTimePass = require('./verify_one_time_pass')


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rn-one-time-pass.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser)
exports.requestOneTimePass = functions.https.onRequest(requestOneTimePass)
exports.verifyOneTimePass = functions.https.onRequest(verifyOneTimePass)
