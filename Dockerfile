FROM ruby:3.1.3
ENV NODE_VERSION=18.11.0
ENV NVM_DIR=/root/.nvm
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"

# Set default locale for the environment so scss compiler works
ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8
ENV LC_CTYPE=UTF-8

RUN apt-get clean && \
    apt-get update && \
    apt install -y curl && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash && \
    . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION} && \
    . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION} && \
    . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION} && \
    node --version && \
    npm --version

WORKDIR /app

#make sure local directory is copied in to the container workdir
COPY . /app

#Some clean up to make sure npm will build idempotently
#Note that these will only be deleted from the container at build time
#They will not be deleted from your local source folder
RUN rm -rf node_modules package-lock.json && \
    npm cache clean --force && \
    npm cache verify && \
    npm install --legacy-peer-deps && \
    bundle install

# Re: previous two commands:
#npm libraries and versions should probably be pegged in package.json
#adding them here because they were not and I don't want to  make assumptions
#about the context of other deployment environments at this stage

#these are more or less a no-op in newer versions of Docker but are useful
#for documentation purposes.
EXPOSE 4000
EXPOSE 35729

CMD npm run serve-all-hosts
