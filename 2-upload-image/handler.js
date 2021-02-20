'use strict';

const { signedUrl } = require('./s3')

module.exports.getUploadUrl = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Upload using this link with some tool like postman. It needs to be a PUT request.',
        url: await signedUrl('image.png')
      }
    )
  };
};
