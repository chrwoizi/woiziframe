FROM node:lts as builder

RUN apt-get update
RUN apt-get install -y unattended-upgrades

# install npm dependencies
WORKDIR /server
COPY server/package.json server/package-lock.json /server/
RUN npm ci

# install service
COPY server /server
COPY shared /shared
RUN npm run build


FROM node:lts

COPY --from=builder /server/dist /server/dist
COPY --from=builder /server/node_modules /server/node_modules
WORKDIR /server
EXPOSE 4201
ENV NODE_ENV=production
CMD [ "node", "/server/dist/server/src/server.js" ]
