FROM node:18-alpine
COPY . /opt/app
WORKDIR /opt/app

RUN rm package-lock.json
RUN npm install --prod
RUN npm install --only=dev
RUN npm run build:dev


WORKDIR /opt/app
CMD ["npx", "serve", "-s", "build"]