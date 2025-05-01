# Use a slim Ruby image as the base
FROM ruby:3.2-slim

# Set environment variables for UTF-8 encoding and non-interactive package installation
ENV LANG=C.UTF-8 \
    LC_ALL=C.UTF-8 \
    DEBIAN_FRONTEND=noninteractive

# Install essential build tools and dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Gemfile and Gemfile.lock
COPY Gemfile* ./

# Install Bundler and project dependencies
RUN gem install bundler && bundle install

# Copy the rest of the source code
COPY . .

# Expose port 4500
EXPOSE 4500

# Start the Jekyll development server with live reloading and listening on all interfaces
CMD ["bundle", "exec", "jekyll", "serve", "--watch", "--incremental", "--host", "0.0.0.0"]