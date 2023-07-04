# OrdersDashboard

## Dashboard to manage orders.

It contains two pages. One for the list of orders and one for order details.
For the MVP, the implementation of these two pages is the goal.

![Dashboard](https://user-images.githubusercontent.com/65773848/232928259-c80f36fc-c69f-4bd9-9c37-11be54c2b6fe.png)

### Frontend

Vite + React + Redux

### Backend

NodeJS + Express

### Database

MongoDB + Mongoose ODM

### Extern Libraries

bcrypt: hashes passwords
validator: validates email addresses
jsonwebtokens: creates and verifies tokens 
cookie-parser: parses cookies
cors: handles cross-origin resource sharing
dotenv: handles environmental variables
mongoose: ODM


## Features

### * Landing page:
Provides a showcase to the customers so they can have an idea of the general features and user interface.

### * Signup and login page:
Creates new user or sign existing users in.

### * Orders page:
Here the user can see all the orders, keep track, and update several changing statuses - Delivery status, payment status, and fulfillment status.

### * New Order page:
The orders are coming straight from the users' e-commerce, but the application also offers the possibility to book a new order manually.

### * JWT Authentication:
JWT tokens are used in two different situations:
1. requires the user to be Authenticated before loading the orders.
2. Decoding the token before every get request and checking if the user has permission to access the requested data. (Not yet complete.)

### * CORS:
CORS are enabled. Orders coming from a different URL will only be accepted if the extern URL is specified in your .ENV file and the env variable is included in the origin array in the index.js file (in the server.)
## Available Scripts

### `npm run dev`

Runs the app in development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in your browser.

ATTENTION: It has to be 127.0.0.1 instead of localhost due to CORS.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npx nodemon`

Runs the app in development mode.\
Open [http://127.0.0.1:3000](http://127.0.0.1:3000) to view it in your browser.
