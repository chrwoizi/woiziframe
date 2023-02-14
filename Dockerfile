FROM node:lts as server-builder

RUN apt-get update
RUN apt-get install -y unattended-upgrades

COPY server/package.json server/package-lock.json /server/
WORKDIR /server
RUN npm ci

COPY server /server
COPY shared /shared
RUN npm run build


FROM node:lts as client-builder

COPY ./package.json client/package-lock.json /client/
WORKDIR /client
RUN npm ci

COPY client /client
COPY shared /shared
RUN npm run build


FROM node:lts

COPY --from=server-builder /server/dist /server/dist
COPY --from=server-builder /server/node_modules /server/node_modules
COPY --from=client-builder /client/dist/woiziframe /server/client

WORKDIR /server
EXPOSE 4201
ENV NODE_ENV=production
CMD [ "node", "/server/dist/server/src/server.js" ]


