FROM node:lts as server-builder

COPY server/package.json server/package-lock.json /server/
WORKDIR /server
RUN npm ci

COPY server /server
COPY shared /shared
RUN npm run build


FROM node:lts as client-builder

COPY client/package.json client/package-lock.json /client/
WORKDIR /client
RUN npm ci

COPY client /client
COPY shared /shared
RUN npm run build


FROM node:lts

RUN apt-get update
RUN apt-get install -y unattended-upgrades

COPY --from=server-builder /server/dist /woiziframe
COPY --from=server-builder /server/node_modules /woiziframe/node_modules
COPY --from=client-builder /client/dist/woiziframe /woiziframe/client

WORKDIR /woiziframe
EXPOSE 4201
ENV NODE_ENV=production
CMD [ "node", "/woiziframe/server/src/server.js" ]


