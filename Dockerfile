# base node image
FROM node:lts AS build

# Install pnpm
RUN npm i -g pnpm

# Create app directory
WORKDIR /app

# Install dependencies
COPY . .
RUN pnpm i

# Build the app
RUN pnpm build

# Serve the app
FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80