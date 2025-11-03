# Dockerfile – Greendot_Ng_Foundation
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install express cors
EXPOSE 3000
CMD ["node", "server.js"]