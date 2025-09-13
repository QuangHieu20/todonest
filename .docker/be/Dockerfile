# Multi-stage build cho backend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files trước để cache dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=false

# Copy source code và build
COPY . .
RUN yarn build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files và install chỉ production deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production=true && yarn cache clean

# Copy built app từ builder stage
COPY --from=builder /app/dist ./dist

# Tạo non-root user cho security
RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001
USER nestjs

EXPOSE 4000

# Health check để start nhanh hơn
HEALTHCHECK --interval=5s --timeout=3s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:4000/', (res) => { process.exit(res.statusCode === 200 ? 0 : 1) })"

CMD ["node", "dist/main.js"]
