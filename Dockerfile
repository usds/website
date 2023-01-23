FROM ruby:2.7
ENV NODE_VERSION=18.11.0

RUN apt-get clean
RUN apt-get update
RUN apt install -y curl

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN node --version
RUN npm --version

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

CMD bundle exec jekyll build --verbose
CMD npm run serve-all-hosts
