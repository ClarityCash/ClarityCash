FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/client/package.json apps/client/package.json

# Install dependencies
RUN pnpm install

# Development stage
FROM base AS dev
WORKDIR /app/apps/client
CMD ["pnpm", "run", "dev", "--host"]

# Production build stage
FROM base AS build
COPY . .
RUN pnpm run build --filter=client

# Production runtime stage (using Nginx)
FROM nginx:alpine AS prod
COPY --from=build /app/apps/client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
