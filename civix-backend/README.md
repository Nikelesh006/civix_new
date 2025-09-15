# Civix Backend (auth)

1. Copy .env.example to .env and fill values (MONGO_URI, JWT_SECRET, FRONTEND_URL).
2. npm install
3. npm run dev   (requires nodemon) OR npm start
4. Backend runs on PORT (default 5000). Example endpoints:
   - POST /api/auth/signup   { name?, email, password }
   - POST /api/auth/login    { email, password }
   - GET  /api/auth/me       (protected, requires Authorization: Bearer <token>)
