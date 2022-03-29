#!/bin/sh
##
# Download latest DB backup via mysqldump (initiates backup if it does not exist).
#
set -e

echo "===> Synchronising media assets..."
rsync -avz --omit-dir-times --omit-link-times -e "ssh -p 22" \
  ${LAGOON_PROJECT}-production@ssh.salsa.hosting:/app/web/content/uploads/ \
  /app/web/content/uploads/
