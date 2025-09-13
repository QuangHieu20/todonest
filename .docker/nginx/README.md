# Nginx Reverse Proxy Setup

## Overview
Nginx reverse proxy cho TodoNest application, route traffic giữa frontend và backend. Sử dụng nginx:alpine official image với volume mount config.

## Features
- ✅ **Reverse Proxy**: Route `/api/*` → Backend, `/*` → Frontend
- ✅ **Gzip Compression**: Tối ưu bandwidth
- ✅ **Rate Limiting**: Bảo vệ API khỏi spam
- ✅ **Security Headers**: XSS, CSRF protection
- ✅ **Static Asset Caching**: Cache JS/CSS/images 1 năm
- ✅ **Health Check**: Monitor nginx status
- ✅ **Alpine Base**: Sử dụng nginx:alpine official image

## Configuration

### Routes
- `http://todonest.id.vn/api/*` → Backend (port 4000)
- `http://todonest.id.vn/health` → Backend health check
- `http://todonest.id.vn/*` → Frontend (port 3000)

### Rate Limiting
- **API**: 10 requests/second per IP
- **Static**: 30 requests/second per IP

### Caching
- **Static assets**: 1 year cache
- **API responses**: No cache

## Docker Compose Usage

```bash
# Start all services including nginx
docker-compose up -d

# Check nginx status
docker-compose logs nginx

# Test nginx config
docker-compose exec nginx nginx -t

# Restart nginx only
docker-compose restart nginx
```

## Environment Variables
- `NGINX_PORT`: Port nginx listen (default: 80)

## Security Features
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Content-Security-Policy: Strict CSP
- Rate limiting per IP
- Alpine Linux với nginx official image
