FROM node:latest
RUN mkdir /app
WORKDIR /app
ADD package.json package.json
ADD /server/ /app/
RUN ls
RUN npm install
RUN npm i -g nodemon
RUN npm i -g typescript
EXPOSE 3000
CMD nodemon index.js