Example of requesting upload url from S3

# How to run

- make sure you change the `AWS_ID` , `AWS_SECRET` & `BUCKET_NAME` inside `s3.js` to your own
- Open terminal and make sure you are in this directory
- `npm i`
- run `sls deploy` and monitor the output
- from the output there should be one link to get the upload url, you can open this link in browser since it is a GET request
- from the reponse of the GET request, there is a url
- copy that url to postman or similar tool
- this url accept PUT method, so make sure you have that selected in postman
- upload the file as binary from postman
- if the response is 200, that mean it success and u can find the file you upload in your bucket
