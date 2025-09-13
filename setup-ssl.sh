#!/bin/bash

# TodoNest SSL Setup Script
# Usage: ./setup-ssl.sh

echo "🔐 Setting up SSL for TodoNest..."

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo "❌ Please run as root: sudo ./setup-ssl.sh"
    exit 1
fi

# Install certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    apt update
    apt install -y certbot
fi

# Stop nginx container temporarily
echo "⏹️ Stopping nginx container..."
docker-compose stop nginx

# Get SSL certificate
echo "🔑 Getting SSL certificate..."
certbot certonly --standalone -d todonest.id.vn -d www.todonest.id.vn --non-interactive --agree-tos --email admin@todonest.id.vn

# Copy certificates
echo "📋 Copying certificates..."
cp /etc/letsencrypt/live/todonest.id.vn/fullchain.pem ./.docker/nginx/certs/todonest.id.vn.crt
cp /etc/letsencrypt/live/todonest.id.vn/privkey.pem ./.docker/nginx/private/todonest.id.vn.key

# Set proper permissions
chmod 644 ./.docker/nginx/certs/todonest.id.vn.crt
chmod 600 ./.docker/nginx/private/todonest.id.vn.key

# Start nginx container
echo "🚀 Starting nginx container..."
docker-compose up -d nginx

# Test SSL
echo "🧪 Testing SSL..."
sleep 5
curl -I https://todonest.id.vn/

echo "✅ SSL setup complete!"
echo "🌐 Website: https://todonest.id.vn/"
echo "🔒 SSL Certificate: Valid"
echo ""
echo "📝 To auto-renew certificates, add this to crontab:"
echo "0 2 1 * * certbot renew --quiet && docker-compose restart nginx"
