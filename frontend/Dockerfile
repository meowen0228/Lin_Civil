FROM nginx:1.19
EXPOSE 8000
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

# FROM node:16-alpine as build-image
# WORKDIR /usr/src/app
# COPY . .
# RUN npm i
# RUN npm run build

# FROM nginx:1.19
# EXPOSE 8000
# COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-image ./usr/src/app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]