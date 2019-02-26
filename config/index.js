'use strict';

const { Datastore } = require('@google-cloud/datastore');

require('dotenv').config();
console.log(process.env.PRIVATE_KEY);

const datastore = new Datastore({
  credentials: {
    private_key: process.env.PRIVATE_KEY,
    client_email: process.env.CLIENT_EMAIL,
  },
});

module.exports = {
  datastore,
};
