# User Registration and Authentication with Express.js and MongoDB

This is a Node.js application that provides a RESTful API for user registration, email verification, and authentication using JSON Web Tokens (JWT). The application is built with Express.js, MongoDB, and uses various libraries like Nodemailer, Joi etc.

## Features

- User registration with email and password
- Email verification with OTP (One-Time Password)
- User profile completion (location, age, work details)
- User login with JWT token generation
- Retrieve user details with JWT authentication
- Email sending using Nodemailer
- Input data validation with Joi
- Environment-specific configurations (development, production)

## Prerequisites

- Node.js (v12 or higher)
- MongoDB (local or remote instance)
- Nodemailer
- JWT Web Tokens

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/am398/Assignment---Backend-developer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Assignment---Backend-developer
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    MONGODB_URI=<your-mongodb-uri>
    GOOGLE_CLIENT_ID=<your-google-client-id>
    GOOGLE_CLIENT_SECRET=<your-google-client-secret>
    GOOGLE_REFRESH_TOKEN=<your-google-refresh-token>
    GOOGLE_USER_EMAIL=<your-google-user-email>
    EMAIL_FROM=<your-email-from>
    JWT_SECRET=<your-jwt-secret>
    ```

   Replace the placeholders with your actual values.

## Usage

- Start the development server:

    ```bash
    nodemon app.js
    ```

   This will start the server in development mode, using Nodemon for automatic reloading.

## API Endpoints

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/verify`: Verify a user's email
- `POST /api/auth/login`: Login with email and password
- `POST /api/users/profile`: Update user details (location, age, work details)
- `GET /api/users/profile`: Retrieve user details (authenticated)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Nodemailer
- Joi
- JSON Web Tokens (JWT)
- Bcrypt
