From node:17-alpine

Run mkdir -p /home/src/frontend

COPY . /home/src/frontend

WORKDIR /home/src/frontend

RUN yarn install

CMD ["yarn","run","start"]