FROM node:12
# Base Image - which our current image would be cascaded on top of

WORKDIR /app

COPY package*.json ./

RUN npm install
# spawns a terminal inside the docker file system and runs the command on it

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]