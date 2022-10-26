FROM node:12.6-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm i --silent
RUN npm i -g @nestjs/cli
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
COPY . . 
CMD ["npm", "start"]
EXPOSE 9229 3000
