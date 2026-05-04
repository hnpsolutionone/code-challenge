# Resource API
A simple RESTful API built with **Node.js, Express, TypeScript, and MongoDB (Mongoose)** following a clean architecture pattern (Controller → Service → Model).

## Features

* CRUD Resource API
* MongoDB with Mongoose
* Request validation using Zod
* Centralized error handling
* Swagger (OpenAPI 3.0) documentation
* Unit testing with Jest & Supertest

## Tech Stack

* Node.js + Express
* TypeScript
* MongoDB + Mongoose
* Zod (validation)
* Swagger (swagger-jsdoc + swagger-ui-express)
* Jest + Supertest

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/hnpsolutionone/code-challenge.git
cd code-challenge/src/problem5
```

### 2. Install dependencies

```bash
npm install
```

## MongoDB Setup (using MongoDB Compass)

### Using MongoDB Compass (GUI)

1. Install **MongoDB Compass**
2. Open Compass
3. Connect using:

```bash
mongodb://127.0.0.1:27017
```

4. Create database:

```text
resource-db
```

## Environment Variables

Copy the example environment file and create your `.env`:

```bash
cp .env.example .env
```

Then update the values inside `.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/resource-db
PORT=3000
```

## Running the Application

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm run build
npm start
```

## API Documentation (Swagger)

Swagger UI is available at:

```text
http://localhost:3000/docs
```

### Features:

* Interactive API testing
* Request/response schemas
* Query & path parameters

## Testing

Run unit tests:

```bash
npm test
```

### Current test coverage:

* Create resource
* Get resource list

---

## API Endpoints

| Method | Endpoint         | Description        | Query Params                      | Sample Data                                                 |
| ------ | ---------------- | ------------------ | --------------------------------- | ----------------------------------------------------------- |
| GET    | `/resources`     | Get all resources  | `type`, `status`, `page`, `limit` | -                                                           |
| GET    | `/resources/:id` | Get resource by ID | -                                 | -                                                           |
| POST   | `/resources`     | Create resource    | -                                 | `{ "name": "BTC", "type": "crypto", "status": "active" }`   |
| PUT    | `/resources/:id` | Update resource    | -                                 | `{ "name": "BTC", "type": "crypto", "status": "inactive" }` |
| DELETE | `/resources/:id` | Delete resource    | -                                 | -                                                           |

---

## Project Structure

```text
├── config/        # DB connection
├── controllers/   # Handle HTTP layer
├── services/      # Business logic
├── models/        # Mongoose schema
├── routes/        # API routes
├── schemas/       # Zod validation
├── middlewares/   # Error & validation
├── docs/          # Swagger config
├── tests/         # Unit tests
├── app.ts         # Express app
├── server.ts      # Entry point
```

---

## Known Limitations / Missing Improvements

This project is functional but not fully production-ready. Consider improving:

### 1. No authentication

* Add JWT authentication
* Add role-based access control (RBAC)

---

### 2. No pagination metadata

Currently:

```json
[]
```

Better:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}
```

### 3. No logging system

* Add logger (e.g. Winston / Pino)


### 4. No config management

* Use dotenv + config layer
* Separate dev / prod configs


### 5. No Docker support

* Add Dockerfile + docker-compose


### 6. Swagger not auto-generated

* Currently manual JSDoc
* Can upgrade to:

  * zod-to-openapi
  * ts-rest


### 7. Test is basic

* No database isolation
* Recommend:

  * mongodb-memory-server
  * mocking layer


## Design Principles

* Separation of concerns
* Thin controllers
* Business logic in services
* Schema validation at boundary


## Future Enhancements

* Authentication & Authorization
* Advanced filtering & sorting
* Caching (Redis)
* CI/CD pipeline
* API versioning
* Rate limiting
