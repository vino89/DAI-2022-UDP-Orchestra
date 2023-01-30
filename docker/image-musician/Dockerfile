FROM node:8

WORKDIR /opt/app
COPY src /opt/app/

RUN npm install

ENTRYPOINT ["node", "/opt/app/musician.js"]