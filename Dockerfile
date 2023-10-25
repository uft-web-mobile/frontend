FROM node:18-alpine3.17

WORKDIR /frontend-code

EXPOSE 5173

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "dev" ]