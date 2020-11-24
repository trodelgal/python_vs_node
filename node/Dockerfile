FROM node:12

WORKDIR /node

ADD package.json .

RUN npm install

COPY . .

EXPOSE 8080

# CMD ["node", "."]