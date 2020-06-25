FROM node:12.16.2-alpine


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

RUN yarn

COPY . .

EXPOSE 3000 3000

CMD [ "yarn", "serve" ]