const AWS = require('aws-sdk')
const AWS_ID = process.env.ACCESSKEY_ID
const AWS_SECRET = process.env.SECRET_ACCESSKEY
const BUCKET_NAME = process.env.S3_BUCKET

const S3 = new AWS.S3({
  accessKeyId: AWS_ID,
  secretAccessKey: AWS_SECRET,
  signatureVersion: 'v4'
})

const signedUrl = (fileName) => {
  return S3.getSignedUrl('putObject', {
    Bucket: BUCKET_NAME,
    Key: fileName
  })
}

module.exports = {
  signedUrl
}
