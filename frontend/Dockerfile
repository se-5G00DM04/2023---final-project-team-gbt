FROM node:18-alpine
COPY . /opt/app
WORKDIR /opt/app
RUN rm package-lock.json 
  && npm install --prod 
  && npm install --only=dev 
  && npm run build:dev

WORKDIR /opt/app
CMD ["npx", "serve", "-s", "build"]