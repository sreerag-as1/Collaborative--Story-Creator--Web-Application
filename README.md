Collaborative Story Creator Web Application
Collaborative Story Creator Web Application is a full-stack project that allows users to collaboratively write short stories. Authenticated users can create new stories or contribute to ongoing ones. After a set number of contributions, the story is marked as complete.
This application allows multiple users to collaborate on creating short stories. It incorporates user authentication, secure routes, and a simple yet interactive user interface. The first user starts the story by adding a sentence, and other users can contribute to the story until it is completed after a fixed number of contributions.
Features
Backend
User Registration and Login: Users can sign up and log in using their email and password.
Story Creation: Authenticated users can start a new story.
Story Contribution: Users can add sentences to ongoing stories until the story is completed.
JWT Authentication: Secure user sessions using JSON Web Tokens.
CRUD Operations: Full implementation of Create, Read, and Update functionalities for stories.
Frontend
User Authentication: Login and registration pages for managing user accounts.
Story Management: Users can start new stories or contribute to ongoing ones.
Ongoing and Completed Stories: View a list of stories in progress or read completed stories.
Responsive Design: Works seamlessly across different devices.
Technologies Used
Backend:
Framework: Django (using MVC pattern)
Language: Python
Database: MongoDB (or any other database of your choice)
Authentication: JWT (JSON Web Token)
API: RESTful API
Frontend:
Framework: React
Languages: HTML, CSS, JavaScript
Styling: CSS
