#!/bin/sh
##
# Download latest DB backup via mysqldump (initiates backup if it does not exist).
#
set -e

echo "===> Backing up database in production ..."
# Prepare remote backup and gzip the dump file.
ssh ${LAGOON_PROJECT}-production@ssh.salsa.hosting -p 22 "rm -f /tmp/db.sql.gz && rm -f /tmp/db.sql && wp db export --add-drop-table --path=/app/web --allow-root /tmp/db.sql && gzip /tmp/db.sql"
# Remove local backups if found.
rm -f /tmp/db.sql.gz
rm -f /tmp/db.sql
scp -P 22 ${LAGOON_PROJECT}-production@ssh.salsa.hosting:/tmp/db.sql.gz /tmp/db.sql.gz
gunzip /tmp/db.sql.gz
ssh ${LAGOON_PROJECT}-production@ssh.salsa.hosting -p 22 "/bin/rm -f /tmp/db.sql"
