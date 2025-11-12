
FROM node:20-slim AS builder


WORKDIR /app


COPY package.json package.json

RUN npm install


COPY . .

RUN npm run build


FROM nginx:alpine AS final


COPY --from=builder /app/dist /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx is listening on (default is 80)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
