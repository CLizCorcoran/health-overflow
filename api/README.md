# Health Overflow - Server Endpoints
## Overview
This web application is the Capstone project for my Full Stack Web Development class.  It demonstrates an understanding of the concepts and development languages and tools surrounding a full stack web application.  Yes, the name is a nod to every programmer's favorite website, Stack Overflow.  

The client enables users to ask questions around health and to post comments on already submitted questions.  These questions and comments are stored on the server in a database.  An authentication system is in place to keep users from asking questions or posting comments unless they are logged in.  

This readme file describes the API used by the Health Overflow client.  

The server can be accessed on Heroku at:
https://health-overflow-server.herokuapp.com/



## Authentication Endpoints

### Registering

/api/user/register   POST

Request Parameters:  
'username':  string(required)  
'password':  string(required)  
'email':     string(optional)

*Successful Response (200 OK)*

Returns:  
'token':  User token


### Logging In

/api/user/login   POST

Request Parameters:  
'username':  string(required)  
'password':  string(required)

*Successful Response (200 OK)*

'token':  User token


### Profile

Not used currently

/api/user/profile?secret_token=<token>   GET



## Questions and Comments Endpoints

### Posting a Question

/api/questions?secret_token=<token>  POST

Request Parameters:
'title':  string(required)
'description': string(required)
'category': string(optional)

*Successful Response (200 OK)*


### Retrieving all questions

/api/questions  GET

Request Parameters:
none

*Successful Response (200 OK)*

Return - an array of the following:
'id':  Question id
'title':  Question title
'description':  Question text
'commentCount':  How many comments are associated with this question.  This one took some time to get right!


### Retrieving all questions within a category

This also returns a count for the number of comments pertaining for this question.  That took some time to get right.  

/api/questions?category=<category>  GET

Valid Categories:
exercise, food, meditation, supplements

Request Parameters:
none

*Successful Response (200 OK)*

Return - an array of the following:
'id': Question id
'title':  Question title
'description':  Question text
'commentCount':  How many comments are associated with this question


### Post a Comment for a Question

/api/questions/:qid/comments?secret_token=<token>  POST

Request Parameters:
'text':  string(required)

*Successful Response (200 OK)*



### Retrieve all Comments for a single Question

/api/questions/:qid/comments    GET

Request Parameters:
none

*Successful Response (200 OK)*

Return - an array of the following:
'id':  Comment id
'text':  Comment text



