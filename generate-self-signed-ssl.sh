#!/bin/bash

# Generate self-signed SSL certificate for testing
# Usage: ./generate-self-signed-ssl.sh

echo "🔐 Generating self-signed SSL certificate..."

# Create directories
mkdir -p .docker/nginx/certs .docker/nginx/private

# Generate private key
openssl genrsa -out .docker/nginx/private/todonest.id.vn.key 2048

# Generate certificate
openssl req -new -x509 -key .docker/nginx/private/todonest.id.vn.key -out .docker/nginx/certs/todonest.id.vn.crt -days 365 -subj "/C=VN/ST=HCM/L=HoChiMinh/O=TodoNest/OU=IT/CN=todonest.id.vn"

# Set permissions
chmod 600 .docker/nginx/private/todonest.id.vn.key
chmod 644 .docker/nginx/certs/todonest.id.vn.crt

echo "✅ Self-signed SSL certificate generated!"
echo "🔒 Certificate: .docker/nginx/certs/todonest.id.vn.crt"
echo "🔑 Private key: .docker/nginx/private/todonest.id.vn.key"
echo ""
echo "⚠️  This is a self-signed certificate for testing only!"
echo "🌐 Website will show security warning in browser"
echo ""
echo "🚀 To deploy: docker-compose up -d --build"
