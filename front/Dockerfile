FROM node:13.12.0-alpine

RUN mkdir /front
WORKDIR /front

COPY package*.json /front/
RUN npm install 
RUN npm install react-scripts@3.4.1 -g

COPY . /front

CMD ["npm", "start"]