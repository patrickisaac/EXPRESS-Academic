Brainstation Capstone Project

Project Title: EXPRESS

This is a web application consisting of all the things I have learned in the 3 months I was in Brainstation.

I build this web application using React.js for the front-end (CSS/SASS for styling) and Express.js with some MySQL for the back-end. Everything can be run via localhost, but I also deployed my app via NGROK.

Concept of project was to promote local dance instructors in Vancouver and have them booked for private lessons. The contact form is used to send an email, followed by a text message to verify if the user is real prior to obtaining further information.

Libraries i've used:

Back-End:
Express
Body-Parser
Axios - for calling Eventbrite API
Dotenv
Logger
Nodemailer - for emailing when user inputs information on the contact form
Nexmo - for sending out text messages once link has been verified
MySQL - used for gathering information that was typed in the contact form (was using MAMP application - created table using SequelizeCLI)

Front-End:
React
React-Router-Dom
React-Socks
React-Responsive-Modal
Axios
SweetAlert2

Feel free to check out my project!

To deploy (change the .env.example file with .env and replace info):

Back-end - type in nodemon server.js
Front-end - npm start

You may need to download the packages listed above if you do not have them already along with API keys from Nexmo and Eventbrite.

Thank you for looking!