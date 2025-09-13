# Multi-stage build cho frontend
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files trước để cache dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source code và build
COPY . .
RUN yarn build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy built app từ builder stage
COPY --from=builder /app/.output ./.output

# Tạo non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S nuxt -u 1001
USER nuxt

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]