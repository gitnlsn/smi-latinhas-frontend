FROM node:20-alpine

ENV DIR=/app
WORKDIR ${DIR}
COPY . ${DIR}

RUN yarn
RUN npx next build

CMD node dist/main