'use strict';

module.exports.hello = async event => {
  const records = event
                    .Records
                    .map(record => Buffer.from(String(record.kinesis.data), 'base64').toString('utf8'));

  console.log(records);
};

module.exports.ledControl = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: JSON.parse(event.body),
      },
      null,
      2
    ),
  };
};