# CRUD REST API

A simple REST API project built to explore Node.js, Express.js, PostgreSQL, and Docker environments.

## Project Overview

This application serves as a learning playground for working with Node.js backend development with a focus on creating RESTful API endpoints that perform CRUD (Create, Read, Update, Delete) operations on user data stored in a PostgreSQL database.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Environment**: Docker containerization
- **API Testing**: Postman

## Project Structure

```
CRUD_RESR_API/
├── config/
│   └── db.js                # Database configuration
├── controllers/
│   └── userController.js    # User endpoint handlers
├── data/
│   ├── createUserTable.js   # Database table initialization
│   └── data.sql             # SQL queries and schema
├── middlewares/
│   ├── errorHandler.js      # Error handling middleware
│   └── inputValidator.js    # Input validation middleware
├── models/
│   └── userModel.js         # User data model
├── routes/
│   ├── userRoutes.js        # User route definitions
│   └── index.js             # Main route aggregator
├── .env                     # Environment variables
├── package-lock.json        # Dependencies lock file
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Docker and Desktop Docker
- Node.js (for local development)
- PostgreSQL client (optional, for direct database access)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Maina206/CRUD_RESR_API
   cd CRUD_RESR_API
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   # Copy the example .env file
   cp .env.example .env
   # Edit the .env file with your configuration
   ```

4. Start the Docker containers:
   ```
   docker-compose up -d
   ```

5. Initialize the database (if needed):
   ```
   npm run db:init
   ```

### Running the API

Start the application:
```
npm start
```

For development with auto-reload:
```
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/users | Get all users |
| GET    | /api/users/:id | Get user by ID |
| POST   | /api/users | Create a new user |
| PUT    | /api/users/:id | Update a user |
| DELETE | /api/users/:id | Delete a user |

## Docker Environment

This project is containerized using Docker to ensure consistent development and runtime environments. The setup includes:

- Node.js application container
- PostgreSQL database container
- Networking between containers

## Development

### Database Setup

The database schema and initial data can be found in `data/data.sql`. To create the user table, the application uses `data/createUserTable.js`.

### Environment Variables

- `PORT`: Application port (default: 3000)
- `DB_PORT`: PostgreSQL database port (default: 5432)
- (Add other environment variables as needed)

## License

MIT License

## Acknowledgments

- This project was created as a learning exercise for Node.js, Express.js, PostgreSQL, and Docker.