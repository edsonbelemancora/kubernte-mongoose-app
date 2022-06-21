FROM node:8-alpine

COPY app.js /
COPY package.json /
COPY models /models
COPY routes /routes

RUN npm install

EXPOSE 8080

CMD ["node", "app.js"]
