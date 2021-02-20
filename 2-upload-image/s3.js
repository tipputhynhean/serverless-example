const AWS = require('aws-sdk')
const AWS_ID = '' // replace this with your aws access key ID 
const AWS_SECRET = '' // replace this with your aws secret key
const BUCKET_NAME = 'tipputhynhean-sls-uploadimage-demo' // replace this with your own bucket

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
