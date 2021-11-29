ARG CLI_IMAGE
ARG IMAGE_VERSION=latest

FROM ${CLI_IMAGE} as cli

FROM uselagoon/php-7.4-fpm:${IMAGE_VERSION}

COPY --from=cli /app /app
