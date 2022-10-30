FROM nginx:1.19
EXPOSE 80
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/ /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]