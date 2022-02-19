FROM node:16

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json  /usr/src/app
COPY package-lock.json  /usr/src/app
COPY .npmrc  /usr/src/app
COPY ../ormconfig.ts /usr/src/app

RUN npm ci

# Bundle app source
COPY . /usr/src/app

ENV NODE_ENV production
CMD npm start