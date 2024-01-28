# Node.js Application with Environment Variables

## Description
This Node.js server, powered by Express.js, runs seamlessly with the right environment variables.


## Setup
In order to run this application, you must set the following environment variables:

- `SECRET_KEY`: This is a confidential key used by the application.
- `PORT`: (Optional) The port number on which the server will run. If not set, it defaults to 3000.

You can set these variables in a `.env` file located in the root directory of this project. Here's an example of an `.env` file:



## About .env File
Unix-like systems hide files that start with a dot (.) by default. One such file is the `.env` file, which stores environment variables that are essential for configuring the application. It should not be publicly visible or included in the source code repository. Following this convention helps prevent the accidental exposure of sensitive information in the source control.