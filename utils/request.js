'use strict';

const http = require('http');

exports.request = url => {
  return new Promise(resolve => {
    http.get({ path: url }, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
};
