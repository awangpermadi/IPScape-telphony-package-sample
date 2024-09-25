# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:20.12.2-alpine3.19 as build
WORKDIR /app
COPY . .
RUN npm config set legacy-peer-deps true
RUN npm install --verbose
RUN ls -l
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:stable-alpine3.17-slim as base
COPY --from=build /app/build/ /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
