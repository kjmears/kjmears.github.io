#!/bin/sh
if [ "$AUTO_CLEAN" = "true" ]; then
  echo "🧹 Clearing _site and caches..."
  rm -rf _site .jekyll-cache .sass-cache
fi

bundle exec jekyll serve --host 0.0.0.0 --port 4500 --livereload --force_polling
