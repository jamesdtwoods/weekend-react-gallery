# Full Stack Feedback

## Description

_Duration: one weekend_

This was my first solo web app using react. It's basically instagram lite, users are able to upload images and upvote posts.

## Screen Shot
<img width="1470" alt="Screenshot 2024-01-13 at 5 45 16 PM" src="https://github.com/jamesdtwoods/weekend-react-gallery/assets/142618619/62ee7a74-478e-4d06-b0ed-473320e4a46b">


### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [pg-pool](https://www.npmjs.com/package/pg-pool)
- [Postico](https://eggerapps.at/postico/v1.php) - or any other database client
- [Postgres](https://www.postgresql.org/) - or any other database manager
- [nodemon](https://www.npmjs.com/package/nodemon) - far from necessary, but a helpful tool to keep your server up to date with any js changes you make.
- react

## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Using the provided inputs you can add items to the gallery 
2. Pressing the "thumbs up" buttons adds likes to the item
3. Pressing the "remove item" button, you guessed it, removes the item

## Future goals
* Material UI styling

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) (especially all the chefs in the Moonstone cohort and our most patient and thoughful instructor Matt) who gave me the tools and confidence to make this application a reality.

## Support
If you have suggestions or issues, you can find my contact information on my [LinkedIn profile](https://www.linkedin.com/in/james-d-t-woods/)
