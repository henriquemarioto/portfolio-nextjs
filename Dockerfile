FROM node:18

WORKDIR /web

COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
