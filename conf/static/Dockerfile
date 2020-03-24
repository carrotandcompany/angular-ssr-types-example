FROM node:13.10.1 AS static-build
RUN mkdir /app
COPY frontend/package.json frontend/package-lock.json /app/
WORKDIR /app
RUN npm ci
COPY frontend/ /app/
RUN npm install -g @angular/cli
RUN ng run frontend:prerender --routesFile routes.txt


FROM node:13.10.1-alpine AS static-ssr-server
COPY --from=static-build /app/dist /app/dist/
COPY /frontend/package.json /app/package.json
WORKDIR /app
RUN npm i -g http-server
CMD http-server -p 8080 ./dist/frontend/browser/