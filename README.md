# User Management System

A full-stack CRUD application built with React and JSON Server, featuring a custom authentication system, protected routes, and data management across posts, albums, todos, and comments — all powered by a RESTful API with 2,000+ data entries.

> ⚠️ This app runs locally only (JSON Server backend).

## Features

* **User Authentication** — Login, registration, and profile completion
* **Posts Management** — Full CRUD with nested comments
* **Albums & Photos** — Photo gallery management (1,290+ photos across 86 albums)
* **Todos** — Task management with sorting, filtering, and completion tracking
* **Advanced Search** — Multi-field search across all data types
* **Authorization** — Protected routes; users access only their own data

## Tech Stack

**Frontend:**
* React 18 with React Router v6
* Custom Hooks (`useAuth`, `useResource`, `useSearch`)
* Axios
* CSS3

**Backend:**
* JSON Server (REST API)
* Local Storage for session management

## Project Structure
```
project6/
├── react6/
│   ├── src/
│   │   ├── components/
│   │   │   ├── auth/       # Login, Register, CompleteProfile
│   │   │   ├── pages/      # Posts, Albums, Photos, Todos, Comments
│   │   │   └── common/     # Reusable components
│   │   ├── hooks/          # Custom React hooks
│   │   └── css/
│   └── package.json
└── jsonserver/
    ├── db.json             # Database
    └── images/
```

## Getting Started

### Prerequisites
* Node.js installed
* npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project6
```

2. Install frontend dependencies:
```bash
cd react6
npm install
```

3. Install JSON Server:
```bash
npm install -g json-server
```

### Running the Application

1. Start JSON Server (port 3000):
```bash
cd jsonserver
json-server --watch db.json --port 3000
```

2. Start React development server:
```bash
cd react6
npm run dev
```

3. Open `http://localhost:5173`

## Database Schema

| Entity   | Count |
|----------|-------|
| Users    | 10    |
| Posts    | 100   |
| Comments | 500   |
| Albums   | 86    |
| Photos   | 1,290 |
| Todos    | 200   |

## Author

Developed as part of a full-stack development course.
