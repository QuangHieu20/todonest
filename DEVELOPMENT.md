# TodoNest Development Setup

## 🚀 Local Development

### 1. Start Database
```bash
# Start PostgreSQL database
docker-compose -f docker-compose.dev.yml up -d

# Check database status
docker-compose -f docker-compose.dev.yml ps
```

### 2. Backend Development
```bash
cd be

# Install dependencies
yarn install

# Start development server
yarn start:dev

# Backend will run on http://localhost:4000
```

### 3. Frontend Development
```bash
cd fe

# Install dependencies
yarn install

# Start development server
yarn dev

# Frontend will run on http://localhost:3000
```

## 🐳 Production Deployment

### Docker Compose (Production)
```bash
# Build and start all services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs

# Stop services
docker-compose down
```

## 📁 Project Structure

```
todonest/
├── be/                    # Backend (NestJS)
│   ├── src/
│   └── package.json
├── fe/                    # Frontend (Nuxt 3)
│   ├── pages/
│   ├── components/
│   └── package.json
├── .docker/               # Docker configurations
│   ├── be/Dockerfile
│   ├── fe/Dockerfile
│   └── nginx/
├── docker-compose.yml     # Production
├── docker-compose.dev.yml # Development (database only)
└── README.md
```

## 🔧 Environment Variables

### Development
- `DATABASE_URL`: `postgresql://postgres:postgres@localhost:5432/todo_nest`
- `API_URL`: `http://localhost:4000`
- `NODE_ENV`: `development`

### Production
- `DATABASE_URL`: `postgresql://postgres:postgres@postgres-db:5432/todo_nest`
- `API_URL`: `http://nginx/api`
- `NODE_ENV`: `production`

## 🚀 Quick Start

### Development
```bash
# 1. Start database
docker-compose -f docker-compose.dev.yml up -d

# 2. Start backend (terminal 1)
cd be && yarn start:dev

# 3. Start frontend (terminal 2)
cd fe && yarn dev
```

### Production
```bash
# Deploy to production
docker-compose up -d --build
```

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check database logs
docker-compose -f docker-compose.dev.yml logs db

# Restart database
docker-compose -f docker-compose.dev.yml restart db
```

### Port Conflicts
```bash
# Check what's using port 3000/4000
lsof -i :3000
lsof -i :4000

# Kill processes
kill -9 $(lsof -ti:3000)
kill -9 $(lsof -ti:4000)
```
