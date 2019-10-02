FROM node:12

WORKDIR /app

#COPY package*.json ./

#RUN npm i

COPY . .

EXPOSE 6666

CMD ["node", "index.js"]
