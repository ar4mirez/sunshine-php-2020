FROM node:13-alpine3.11

ENV PORT=1337
ENV HOST=0.0.0.0

RUN mkdir /code

WORKDIR /code

COPY . .

RUN npm i

EXPOSE ${PORT}

CMD npm start
