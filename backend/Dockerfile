FROM node:18-alpine
COPY . /opt/app
RUN cd /opt/app \
  && npm install --prod 
WORKDIR /opt/app
CMD ["npm", "run", "start"]