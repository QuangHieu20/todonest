# SSL/HTTPS Setup cho TodoNest

## 🚨 Vấn đề hiện tại
- ✅ **HTTP hoạt động**: `http://todonest.id.vn/`
- ❌ **HTTPS không hoạt động**: `https://todonest.id.vn/`

## 🔧 Giải pháp tạm thời
Hiện tại đang dùng `nginx-no-ssl.conf` để website hoạt động qua HTTP.

## 🔐 Setup SSL/HTTPS

### 1. Sử dụng Let's Encrypt (Miễn phí)

#### Cài đặt Certbot
```bash
# Trên server Ubuntu/Debian
sudo apt update
sudo apt install certbot python3-certbot-nginx

# Trên server CentOS/RHEL
sudo yum install certbot python3-certbot-nginx
```

#### Tạo SSL certificate
```bash
# Tạo certificate cho domain
sudo certbot --nginx -d todonest.id.vn -d www.todonest.id.vn

# Test renewal
sudo certbot renew --dry-run
```

### 2. Update Nginx Config

#### Copy certificate files
```bash
# Copy certificate files vào container
sudo cp /etc/letsencrypt/live/todonest.id.vn/fullchain.pem /path/to/todonest/.docker/nginx/certs/
sudo cp /etc/letsencrypt/live/todonest.id.vn/privkey.pem /path/to/todonest/.docker/nginx/certs/
```

#### Update docker-compose.yml
```yaml
nginx:
  image: nginx:alpine
  container_name: todo_nginx
  ports:
    - "80:80"
    - "443:443"  # Thêm port 443
  volumes:
    - ./.docker/nginx/nginx.conf:/etc/nginx/nginx.conf:ro
    - ./.docker/nginx/certs:/etc/ssl/certs:ro  # Mount certificates
  depends_on:
    - frontend
    - backend
  restart: always
```

### 3. Switch to SSL Config

#### Update nginx.conf
```nginx
# HTTP server - redirect to HTTPS
server {
    listen 80;
    server_name todonest.id.vn www.todonest.id.vn;
    
    # Redirect all HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name todonest.id.vn www.todonest.id.vn;
    
    # SSL configuration
    ssl_certificate /etc/ssl/certs/todonest.id.vn.crt;
    ssl_certificate_key /etc/ssl/private/todonest.id.vn.key;
    
    # ... rest of config
}
```

### 4. Deploy với SSL

```bash
# 1. Tạo certificates
sudo certbot --nginx -d todonest.id.vn -d www.todonest.id.vn

# 2. Copy certificates
sudo cp /etc/letsencrypt/live/todonest.id.vn/fullchain.pem ./.docker/nginx/certs/todonest.id.vn.crt
sudo cp /etc/letsencrypt/live/todonest.id.vn/privkey.pem ./.docker/nginx/certs/todonest.id.vn.key

# 3. Switch to SSL config
# Update docker-compose.yml để dùng nginx.conf thay vì nginx-no-ssl.conf

# 4. Deploy
docker-compose down
docker-compose up -d --build
```

## 🔄 Auto-renewal SSL

### Setup cron job
```bash
# Edit crontab
sudo crontab -e

# Thêm dòng này để auto-renew mỗi tháng
0 2 1 * * certbot renew --quiet && docker-compose restart nginx
```

## 🧪 Test SSL

```bash
# Test SSL certificate
curl -I https://todonest.id.vn/

# Test redirect
curl -I http://todonest.id.vn/

# Test SSL rating
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=todonest.id.vn
```

## 📝 Notes

1. **Let's Encrypt**: Miễn phí, tự động renew
2. **Wildcard certificate**: Có thể dùng cho subdomains
3. **HTTP/2**: Đã enable trong nginx config
4. **Security headers**: Đã có CSP, XSS protection
5. **Rate limiting**: Đã có cho API và static assets

## 🚀 Quick Fix (Tạm thời)

Nếu muốn website hoạt động ngay:

```bash
# Deploy với HTTP only
docker-compose down
docker-compose up -d --build

# Website sẽ hoạt động tại: http://todonest.id.vn/
```
