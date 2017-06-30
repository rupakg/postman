'use strict';

module.exports.sendEmail = (event, context, callback) => {
  const response = {
    statusCode: 202,
    body: JSON.stringify({
      message: 'Go Serverless! Simulating sending emails successful.',
      input: event,
    }),
  };

  callback(null, response);
};
