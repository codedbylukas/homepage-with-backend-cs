# --- STAGE 0: Testing ---
FROM node:26-alpine AS test26
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run test -- --watch=false

FROM node:20-alpine AS test20
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run test -- --watch=false

# --- STAGE 1: Build ---
FROM node:26-alpine AS build
WORKDIR /src

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npx ng build --configuration production

# --- STAGE 2: Runtime ---
FROM nginx:alpine AS final

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /src/dist/frontend/browser .
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
