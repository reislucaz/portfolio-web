FROM node:alpine as BUILD_IMAGE
WORKDIR /app
COPY package*.json ./
# install dependencies
RUN npm install
COPY . .
# build app
RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist"]