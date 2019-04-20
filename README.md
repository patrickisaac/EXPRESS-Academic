## EXPRESS

### About

For my final project, I built a web application consisting of everything I had learned in the 12 weeks that I was in BrainStation.

Concept of project was to promote local dancer instructors in Vancouver and allow users to book them for lessons. The contact form involved was used to sent an email to the user, followed by a text message to verify if the user was a real person prior to obtaining further information.

In addition, an Event page was created with the use of Eventbrite API. Events posted on page were narrowed down to any events located in Vancouver that fell into the "Dance" category.

### Key Learnings Implemented

- Front-End: 
  - React
  - CSS/SASS

- Back-End:
  - Node.js/Express.js
  - MySQL
  
### Specific Libraries Used

- Front-End:
  - React
  - React-Router-Dom
  - React-Socks
  - React-Responsive-Modal
  - Axios
  - SweetAlert2
 
- Back-End:
  - Express
  - Body-Parser
  - Axios - for calling Eventbrite API
  - Dotenv
  - Logger
  - Nodemailer - for emailing when user inputs information on contact form
  - Nexmo - for sending text messages once link in email has been verified/clicked
  - MySQL - used for gathering information that was typed in contact form (used MAMP application - created table using SequelizeCLI)

### Deployment

Feel free to check out my project!

To deploy (change the .env.example file with .env and replace info):

Back-end type in `nodemon server.js`
Front-end type in `npm start`

You may need to download the packages listed above if you do not have them already along with API keys from Nexmo and Eventbrite.

Thank you for looking!