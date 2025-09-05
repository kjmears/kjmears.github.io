FROM ruby:3.2-slim

ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Install dependencies + Node.js for assets
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Install gems first for caching layers
COPY Gemfile Gemfile.lock* ./
RUN gem install bundler && bundle install

# Copy the rest of the project
COPY . .

# Expose Jekyll + LiveReload
EXPOSE 4500 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--port", "4500", "--livereload", "--force_polling"]
