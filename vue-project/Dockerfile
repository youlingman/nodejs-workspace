FROM nginx
LABEL maintainer="youlingman"
COPY ./dist /var/www/vue
COPY ./vue.conf /etc/nginx/conf.d/
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
