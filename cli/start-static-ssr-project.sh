#!/usr/bin/env bash
set -e
DOCKER_STATIC_SSR_SERVER="static-ssr-server"

# build server for static ssr:
docker build -f ../conf/static/Dockerfile --target static-ssr-server -t $DOCKER_STATIC_SSR_SERVER .

docker container rm -f $DOCKER_STATIC_SSR_SERVER || true

docker container run --name $DOCKER_STATIC_SSR_SERVER -p 8080:8080 -d $DOCKER_STATIC_SSR_SERVER
