The simplest form of serverless function.

# How to run

- Open terminal and make sure you are in this directory
- run `sls deploy` and monitor the output
- after deployment is completed you should see something like this

```
Service Information
service: helloworld
stage: dev
region: us-east-1
stack: helloworld-dev
resources: 10
api keys:
  None
endpoints:
  GET - https://vwcz7r4354.execute-api.us-east-1.amazonaws.com/dev/
functions:
  hello: helloworld-dev-hello
layers:
  None
```
- click copy the end point from the output and open it in browser, you should see the response there
