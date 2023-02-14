
FROM node:lts as builder
ARG API_URL

# install npm dependencies
COPY ./package.json client/package-lock.json /client/
WORKDIR /client
RUN npm ci

# install service
COPY /client /client
COPY /shared /shared
RUN npm run build

FROM nginx:latest

COPY --from=builder /client/dist/woiziframe /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

RUN sed -i "s|\$(API_URL)|${API_URL}|g" /etc/nginx/conf.d/default.conf
