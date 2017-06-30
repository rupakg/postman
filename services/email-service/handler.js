'use strict';

module.exports.sendEmail = (event, context, callback) => {

  callback(null, { message: 'Go Serverless! Simulating sending emails successfull.', event });

};
