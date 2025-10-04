# Timestamp Microservice

This is a full stack JavaScript application that functions as a timestamp microservice. It allows users to input a timestamp and receive the corresponding Unix timestamp and natural language date.

## Project Structure

The project is divided into two main parts: the client and the server.

### Client

The client is built using React and is located in the `client` directory. It consists of the following components:

- **TimestampForm.js**: A component for handling user input for timestamps.
- **TimestampResult.js**: A component for displaying the result of the timestamp conversion.
- **App.js**: The main application component that integrates the form and result components.
- **App.css**: Styles for the application.
- **index.js**: The entry point for the React application.

### Server

The server is built using Express and is located in the `server` directory. It includes:

- **routes/timestamp.js**: Defines the routes for the timestamp microservice.
- **controllers/timestampController.js**: Contains methods for processing timestamp requests.
- **middleware/cors.js**: Sets up CORS middleware for cross-origin requests.
- **app.js**: The entry point for the server application.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```

3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. In a new terminal, navigate to the client directory and start the client:
   ```
   cd client
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`.
- Enter a timestamp in the input field and submit the form.
- The application will display the corresponding Unix timestamp and natural language date.

## License

This project is licensed under the MIT License.