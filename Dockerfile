FROM php:8.2-cli as php 

RUN apt-get update && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql

WORKDIR /var/www/html

RUN mkdir -p php

COPY tests/test.php ./php/test.php

EXPOSE 8082


#RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
#    && docker-php-ext-install pgsql pdo_pgsql

