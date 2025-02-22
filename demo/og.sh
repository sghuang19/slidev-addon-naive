#!/bin/sh

cd "$(dirname "$0")"
cat << 'EOF' | sed -i '' -f - dist/index.html
  /<\/head>/i\
  <meta property="og:title" content="Your Title" />\
  <meta property="og:description" content="Your Description" />\
  <meta property="og:image" content="your-image-url" />
EOF
