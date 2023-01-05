FROM ruby:2.7

RUN apt-get clean
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get install -y npm

WORKDIR /app

#make sure local directory is copied in to the container workdir
COPY . /app

#Some clean up to make sure npm will build idempotently
#Note that these will only be deleted from the container at build time
#They will not be deleted from your local source folder
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm cache verify

#npm libraries and versions should probably be pegged in package.json
#adding them here because they were not and I don't want to  make assumptions
#about the context of other deployment environments at this stage
RUN npm install --legacy-peer-deps
RUN bundle install

#these are more or less a no-op in newer versions of Docker but are useful
#for documentation purposes.
EXPOSE 4000
EXPOSE 35729

CMD npm run serve-all-hosts
