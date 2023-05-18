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
ARG DB_DATABASE
ENV DB_DATABASE ${DB_DATABASE}
ARG DB_SCHEMA
ENV DB_SCHEMA ${DB_SCHEMA}
ARG DB_HOST
ENV DB_HOST ${DB_HOST}
ARG DB_PORT
ENV DB_PORT ${DB_PORT}
ARG DB_USER
ENV DB_USER ${DB_USER}
ARG DB_PASS
ENV DB_PASS ${DB_PASS}
# COPY .env ./
EXPOSE 8080
CMD [ "node", "src/index.js" ]
