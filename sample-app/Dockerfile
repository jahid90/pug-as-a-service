FROM node:26-alpine

WORKDIR /app

COPY package.json yarn.lock .
RUN yarn install

COPY . .

CMD ["yarn", "start"]
