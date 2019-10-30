FROM node:alpine

VOLUME ["/app"]

WORKDIR /app

RUN npm install -g serve
RUN npm run build

CMD  serve -s build