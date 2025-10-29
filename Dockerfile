# Dockerfile
# Use official Node image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# Copy project files
COPY . .

# Build the app for production
RUN pnpm run build

# Expose the production port
EXPOSE 3000

# Serve using pnpm dlx (no global install)
CMD ["pnpm", "dlx", "serve", "-s", "dist", "-l", "3000"]
