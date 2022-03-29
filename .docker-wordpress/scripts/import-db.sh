#!/bin/sh
##
# Download latest DB backup.
#
WPBIN=/usr/local/bin/wp
set -e

$WPBIN --path=/app/web db reset --yes --allow-root
$WPBIN --path=/app/web db query --allow-root < /tmp/db.sql
echo "===> Imported production database"
/bin/rm -f /tmp/db.sql

$WPBIN --path=/app/web cache flush all --allow-root
