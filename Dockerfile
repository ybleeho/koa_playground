FROM node:12.16.2-alpine


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./
COPY ./tsconfig.json ./

COPY ./.env.example ./.env
COPY . .

RUN yarn && yarn build

EXPOSE 3000
CMD [ "yarn", "start" ]
