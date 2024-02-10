# GingerApp
Task Description:

Problem Statement:
Create a signup page where a user can register, a login page to log in with the necessary details needed during registration. Successful login should redirect to a profile page which should contain additional details such as age, date of birth, contact, etc. The user can update.

Flow:
Register > Login > Profile

Points to Remember:

Use React to create the front end.
Create the APIs with Node.js.
- Signup API
- Login API
- getUserDetails API
- editUserDetails API
Use MySQL for storing the data.
Implementation:
This project involves creating a web application with three main pages: Signup, Login, and Profile. Each page serves a specific purpose in the user journey.

Signup Page:

Allows users to register with necessary details such as username, password, etc.
Sends registration data to the backend via the Signup API.
Implemented using React for the frontend.
Login Page:

Enables registered users to log in with their credentials.
Sends login data to the backend via the Login API.
Upon successful login, redirects the user to the Profile page.
Developed using React for the frontend.
Profile Page:

Displays additional user details such as age, date of birth, contact, etc.
Allows users to update their profile information.
Retrieves user details from the backend using the getUserDetails API.
Sends updated profile data to the backend via the editUserDetails API.
Utilizes React for the frontend.
APIs:

-Signup API:
Receives registration data from the frontend.
Validates and stores the user information in the MySQL database.
-Login API:
Accepts login credentials from the frontend.
Validates the credentials against the data stored in the database.
Returns a response indicating the success or failure of the login attempt.
getUserDetails API:
Retrieves the user's profile information from the database based on the provided user ID.
Sends the user details back to the frontend for display on the Profile page.
editUserDetails API:
Receives updated profile information from the frontend.
Updates the corresponding user record in the database with the new details.
Database:

MySQL is used for storing user data.
Tables are created to store user registration information and profile details.
Overall, this project implements a full user authentication and profile management system using React for the frontend, Node.js for the backend APIs, and MySQL for data storage.
