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

CMD ["node", "dist/main.js"]
