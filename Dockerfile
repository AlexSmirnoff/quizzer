FROM node:alpine AS build-stage
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=build-stage /app/dist/quizzer /usr/share/nginx/html
EXPOSE 80