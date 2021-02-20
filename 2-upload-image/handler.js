'use strict';

const { signedUrl } = require('./s3')

module.exports.getUploadUrl = async (event) => {
  console.log(await signedUrl('image.png'))
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }
    )
  };
};
