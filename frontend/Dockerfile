FROM node:18-alpine
COPY . /opt/app
RUN cd /opt/app 
  && rm package-lock.json 
  && npm install --prod 
  && npm install --only=dev 
  && npm run build:dev

WORKDIR /opt/app
CMD ["npx", "serve", "-s", "build"]