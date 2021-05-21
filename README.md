# Health Overflow - A Health Discussion Forum Web Application
## Overview
This web application is the Capstone project for my Full Stack Web Development class.  It demonstrates an understanding of the concepts and development languages and tools surrounding a full stack web application.  Yes, the name is a nod to every programmer's favorite website, Stack Overflow.  

The client enables users to ask questions around health and to post comments on already submitted questions.  These questions and comments are stored on the server in a database.  An authentication system is in place to keep users from asking questions or posting comments unless they are logged in.  

The project can be run directly through the following link:
https://health-overflow-client.herokuapp.com/

The server's API project contains a README file for a description of the API's used for this project.  



## About Health Overflow

### Logging In
A Health Overflow user does not have to have an account for read access to the health forums.  However, they do need to be logged in to post questions or comments.  

To log in for the first time, the user must register by clicking the Sign Up button in the upper right of the navigation bar.  Once they register, they will immediately be logged in.  Once they have an account, they can simply log in to the site via the Log in button, next to the Sign Up button.  

The first time they log in, the user will have to register.  Upon completion of registration, they will immediately be logged in.  

After the user has logged out, note that the 'Login' link changes to a person.  At this point, that button is inactive.  With more time, I would have liked to have added a profile page.  The user will also see a 'Log out' button.  



### Viewing Questions
Pressing the 'Enter' button on the home screen takes the user to the complete list of questions.  Filters are provided along the left to narrow down the list of questions.  The title for each question along with its text.  Long text may be truncated.  To the left of each question is the number of comments posted.  

Clicking on the question's title will navigate the user to a page where they can read the entire question as well as read all of the associated comments.  


### Posting a Question
In order to post / ask a question, the user must be logged in.  When logged in, the user can select the 'Ask Question' button in the upper right of the the Questions page.  They will be presented with a form where they can give their question a title and complete question text.  They can also provide a category for their question.  'General' is the default category.  Only the 'All' filter will show questions in this category.  

At this time, there is not a way to delete a question once posted.  


### Posting Comments
In order to post a comment, the user must be logged in.  When logged in, when the user navigates to the question's detail page, they will be presented with a text box to write their comments in.  Pressing the 'Post Comment' button will immediately log their comment.  The user should see it displayed immediately.  

At this time, there is not a way to delete a comment once posted.  Post wisely!  : )  


## Technologies Used
The client of this web application was built using React, React Routes, Redux, with HTML, JavaScript, CSS/SASS.  The CSS file was taken from Bootswatch - journal.css.  The JavaScript portion of Bootstrap was not pulled into the project.  A side goal of this project was to learn more about React Hooks.  Previously I had only used React Components.  

The server side of the web application was build using Node.js.  Authentication was done using Passport.js.  MySQL was used for the database.  



## Future Improvements
The goal of this project was to build a complete Full Stack Web Application.  I hit a few bumps in the road that slowed me down.  Authentication took a few days for me to get working.  A bug sitting right in front of my eyes took a full day to see.  The joys of software development.  Authentication using Passport was foreign to me so there was a lot of trial and error.  The server in general just took more time for me given the newness of writing one.  In short, as of the turning in of the project, I wish I could have more visual substance there.  

- Dynamic categories - right now, the categories presented to the user are hardcoded.  It would be nice to have these stored in a database table and then dynamically read in by the client.  

- User profile - add the ability for the user to see their profile and make changes.  

- Ability to delete questions and comments.

- Listing the username of the user writing the question or comment.

- Error handling.  I ran out of time for polishing - those bugs are just waiting to come out.  



