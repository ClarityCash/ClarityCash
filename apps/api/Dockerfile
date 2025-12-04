FROM node:18-alpine AS base

# Install pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/api/package.json apps/api/package.json

# Install dependencies
RUN pnpm install

# Development stage
FROM base AS dev
WORKDIR /app/apps/api
CMD ["pnpm", "run", "dev"]

# Production build stage
FROM base AS build
COPY . .
RUN pnpm run build --filter=api

# Production runtime stage
FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=build /app/apps/api/dist ./dist
COPY --from=build /app/apps/api/package.json ./
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "dist/main"]
