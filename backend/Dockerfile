# FROM node:16-alpine as build-image
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY tsconfig.json ./
# COPY ./src ./src
# RUN npm ci
# RUN npx tsc

# FROM node:16-alpine
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY --from=build-image ./usr/src/app/dist ./dist
# RUN npm i
# COPY .env ./
# EXPOSE 8080
# CMD [ "node", "dist/index.js" ]

FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY ./dist ./src
COPY ./public ./public
RUN npm ci
COPY .env ./
EXPOSE 8080
CMD [ "node", "src/index.js" ]