FROM node:alpine

VOLUME ["/app"]

WORKDIR /app

RUN npm install -g serve

CMD npm install && npm run build && serve -s build