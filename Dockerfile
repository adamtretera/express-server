FROM node:13

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . . 


ENV PORT=8080

EXPOSE 8080

CMD ["yarn", "start"]