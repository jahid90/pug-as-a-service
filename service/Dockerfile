FROM node:19-alpine

WORKDIR /home/pug/app

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

CMD ["yarn", "start"]
