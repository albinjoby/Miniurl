# Miniurl

A simple URL shortener project with a Node.js/Express backend and PostgreSQL database.

## Features

- URL shortening service
- PostgreSQL database integration
- RESTful API endpoints
- CORS enabled for cross-origin requests
- Environment-based configuration
- Modern ES6+ JavaScript with modules

## Technologies Used

### Backend (Server)
- **Node.js** - Runtime environment for executing JavaScript server-side
- **Express.js** - Web framework for building RESTful APIs and handling HTTP requests
- **PostgreSQL** - Primary database for persistent storage of URLs and their shortened IDs
- **Redis** - In-memory caching system for improved performance:
  - Caches frequently accessed URLs for faster redirects
  - Maintains a global counter for generating unique IDs
- **dotenv** - Environment variable management for configuration
- **CORS** - Cross-Origin Resource Sharing middleware for API access
- **Custom Base62 Encoder** - Converts numeric IDs to short, URL-friendly strings

### Frontend (Client)
- **React** - Component-based UI library for building interactive interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **ESLint** - Code linting and quality assurance

### Development Tools
- **Nodemon** - Auto-restart development server on file changes
- **ES6+ Modules** - Modern JavaScript module system
- **Git** - Version control system

### Architecture
- **RESTful API Design** - Clean separation between frontend and backend
- **Caching Strategy** - Redis caching with TTL for optimized performance
- **Database Connection Pooling** - Efficient PostgreSQL connection management
- **Environment Configuration** - Separate development and production settings

## Project Structure

```
client/      # Frontend
server/      # Backend API
  ├── db.js
  ├── index.js
  ├── package.json
  ├── .env
```

## Setup

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   cd server
   npm install
   ```
3. **Configure environment variables**
   - Edit `server/.env` with your PostgreSQL credentials:
     ```
     DB_USER="postgres"
     PASSWORD="yourpassword"
     HOST="localhost"
     PORT=5432
     DATABASE="urls"
     ```
4. **Start the server**
   ```bash
   npm run dev
   ```

## API

- `GET /`  
  Returns all URLs from the database.

## Dependencies

- express
- cors
- dotenv
- pg
