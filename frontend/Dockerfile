# stage 1
FROM ubuntu as linuxalpine
LABEL Autor="David Leandro Zuluaga Martinez"
RUN echo "LC_ALL=en_US.UTF-8" >> /etc/environment
RUN echo "LANG=en_US.UTF-8" >> /etc/environment
RUN echo "NODE_ENV=development" >> /etc/environment
RUN more "/etc/environment"

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get dist-upgrade -y \
    curl \
    build-essential \
    git \
    zip -y

RUN curl -sL https://deb.nodesource.com/setup_11.x | bash
RUN apt-get install --yes nodejs

RUN node -v
RUN npm -v
RUN npm i -g nodemon
RUN nodemon -v
RUN apt-get update && apt-get upgrade -y && apt-get autoremove -y
WORKDIR /app
ADD package*.json /app/
RUN npm install
ADD ./ /app/
ARG configuration=production
RUN npm run build -- --prod --aot=false --build-optimizer=false --output-path=./dist/out --configuration $configuration

# stage 2
FROM nginx:alpine
LABEL Autor="David Leandro Zuluaga Martinez"
ADD nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=linuxalpine /app/dist/out/ .
CMD ["nginx", "-g", "daemon off;"]
