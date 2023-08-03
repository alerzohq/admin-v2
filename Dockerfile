FROM node:16.11.1-stretch as build

WORKDIR /app

COPY package*.json /app
RUN npm install

COPY ./ /app

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_API_TEMP_URL
ARG REACT_APP_ENCRYPTION_KEY

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
