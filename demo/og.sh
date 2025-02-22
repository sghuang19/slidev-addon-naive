#!/bin/sh

sed -i '' '/<\/head>/i \
    <meta property="og:title" content="Your Title" />\
    <meta property="og:description" content="Your Description" />\
    <meta property="og:image" content="your-image-url" />\
' dist/index.html
