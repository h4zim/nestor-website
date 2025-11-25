# Stage 1: Build the Angular application
FROM node:22-alpine as build

WORKDIR /app

# Copy only package.json and package-lock.json first for caching
COPY package*.json /app/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . /app

# Build the application in production mode
ARG configuration=production
RUN npm run ng build -- --output-path=dist --configuration=$configuration

# Stage 2: Serve the application with NGINX
FROM nginx:alpine

# Remove the default NGINX configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy only the contents of the `browser` folder into the NGINX HTML directory
COPY --from=build /app/dist/browser/ /usr/share/nginx/html
