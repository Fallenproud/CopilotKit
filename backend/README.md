# Backend Setup Documentation

## Prerequisites
- Node.js >= 14
- npm >= 6

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/Fallenproud/CopilotKit.git
   cd CopilotKit
   ```
2. Install dependencies:
   ```
   npm install
   ```

## Running the Backend
To start the backend server, use:
```bash
npm start
```

### Environment Variables
Make sure to set up the following environment variables in a `.env` file:
- `DATABASE_URL`: Your database connection string
- `SECRET_KEY`: Your JWT secret key

## API Routes
- `POST /api/login`
  - Description: Authenticates a user and returns a JWT token.
  - Request Body:
    - `username`: string
    - `password`: string

- `GET /api/profile`
  - Description: Returns the authenticated user's profile data.
  - Headers: `Authorization: Bearer <token>`

- `POST /api/items`
  - Description: Creates a new item.
  - Request Body:
    - `name`: string
    - `description`: string

- `GET /api/items`
  - Description: Retrieves all items.

- `GET /api/items/:id`
  - Description: Retrieves a specific item by ID.

- `PUT /api/items/:id`
  - Description: Updates an existing item.
  - Request Body:
    - `name`: string
    - `description`: string

- `DELETE /api/items/:id`
  - Description: Deletes an item by ID.

Please refer to API documentation for more details on each route. 
