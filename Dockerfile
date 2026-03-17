FROM php:8.2-cli as php 

RUN apt-get update

WORKDIR /var/www/html

RUN mkdir -p php

COPY server/src/* ./php/

EXPOSE 8082


#RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
#    && docker-php-ext-install pgsql pdo_pgsql

