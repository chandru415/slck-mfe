# Build Stage
FROM docker.io/node:20.14-alpine3.20 AS build-stage
WORKDIR /app

ARG BUILD_COMMAND=build
ARG PROJECT_NAME=shell
ARG NGINX_CONFIG=normal
ARG NGX_ENV=normal

# Copy only package.json and package-lock.json first (for caching purposes)
COPY package*.json ./

# Install Angular CLI and Nx CLI globally, install app dependencies
RUN npm install -g @angular/cli @nrwl/cli
RUN npm install -f

# Copy the rest of the app source code
COPY . .

# Clean Nx cache if needed
RUN rm -rf .nx/cache

# Build the Angular project
RUN npm run ${BUILD_COMMAND} --configuration=${NGX_ENV} --skip-nx-cache

# Serve Stage
FROM nginx:1.25.5

ARG PROJECT_NAME=shell
ARG NGINX_CONFIG=normal

# Copy the built Angular app from the build stage to the Nginx serving directory
COPY --from=build-stage /app/dist/apps/${PROJECT_NAME}/browser /usr/share/nginx/html

# Copy nginx.conf from the root level using relative path
COPY ./nginx/nginx.${NGINX_CONFIG}.conf /etc/nginx/conf.d/default.conf

# Expose the port that Nginx is listening on (default is 80)
EXPOSE 80 

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
