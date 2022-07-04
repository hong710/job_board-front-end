# DATAPIPER JOB LISTING APP

## REQUIREMENTS
- Single page application for listing openning jobs.
- User is able to search job postion based on role or client or wild card string
- User is able to create a new role with data provided.
- User is able to see the details of the role.
- Color scheme in sync with Datapiper home page.
- Bonus : validation the user data before submitting
# Design 
## Front End: React.js with npm package
    - Tailwind
    - Formik
    - Yup 
    - React Router v6
    - react-icons
## Back End: Ruby on Rails for APIs
    - have several routes 
        - :index 
        - :show
        - :create
## Database: SQL lite
    - Only one table need to the simple app
    - columns: client, poc, email, role, urgency, quantity, skills 

# TESTING 
    - validation of the fomr work as intended
    - Search function working as intended
    - USer is able to ceate new role.
# Deployment
    - backend: hosting Ruby on rails APi from public Linux server
        - config cors for public access
    - front end: using netlify
        - CI/CD using github for deployment
# IMPROVEMENT
    - create more routes for edit and delete role.
    - setup aunthentication using the JWT.

# Project Showcase
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
## Home page
![homepage](https://user-images.githubusercontent.com/8335102/177091298-85fb8218-6452-4b83-8b07-bdd7c377fe44.png)

## Create role Page
![Create page](https://user-images.githubusercontent.com/8335102/177091395-a03a5358-6070-4bc2-9630-7baaa7c48ba9.png)

## Detail role Page
![detail page](https://user-images.githubusercontent.com/8335102/177091456-59c2da29-9f7b-4b8b-aeaa-1faadffa32d7.png)