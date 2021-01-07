# https://damianhodgkiss.com/articles/how-to-run-google-chrome-headless-and-nodejs-in-a-docker-container/
FROM node:12.16.1-alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN apk add --no-cache --virtual .gyp \
  git \
  && yarn --frozen-lockfile --no-cache \
  && apk del .gyp
ARG env
ENV NEXT_PUBLIC_ENV=$env
RUN yarn build
EXPOSE 4000
ENV PORT 4000
CMD ["yarn", "start"]