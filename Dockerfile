FROM node

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN yarn install

EXPOSE 8080

CMD ["yarn", "start", "--host", "0.0.0.0"]
