ARG CLI_IMAGE
FROM ${CLI_IMAGE} as cli

FROM uselagoon/php-7.4-fpm:${IMAGE_VERSION}

COPY --from=cli /app /app
