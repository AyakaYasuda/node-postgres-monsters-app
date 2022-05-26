#!/bin/bash
source .env

export PGPASSWORD=$PG_PASSWORD
database="monstersdb"

echo "Configuring database: $database"

dropdb -U node_user monstersdb
createdb -U node_user monstersdb

psql -U node_user monstersdb < ./bin/sql/monsters.sql

echo "$database configured"