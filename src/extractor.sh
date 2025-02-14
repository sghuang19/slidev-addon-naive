FILE_PATH=${1:-"slides.md"}

# 1. Extract open tags of Naive UI components (starting with N and followed by
#    an uppercase letter)
# 2. Remove duplicates
# 3. Remove prefixes and suffixes
# 4. Remove duplicates

grep -o "<N[A-Z][a-zA-Z]*[ />]" "$FILE_PATH" \
  | sort \
  | uniq \
  | sed "s/^<\(.*\)[ />]$/\1/" \
  | sort \
  | uniq
