FROM ubuntu:20.04 as builder
LABEL authors="nguyenquanghieu"

# install + update library ubuntu
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g yarn \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* 
    
# Setup folder run resource in Docker
WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

EXPOSE 4000

CMD ["node", "dist/main.js"]
