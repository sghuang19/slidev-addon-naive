# 1. Extract open tags of Naive UI components (starting with N and followed by
#    an uppercase letter)
# 2. Remove duplicates
# 3. Remove prefixes and suffixes
# 4. Remove duplicates

grep -o '<N[A-Z][a-zA-Z]*[ />]' ../slides.md \
  | sort \
  | uniq \
  | sed 's/^<\(.*\)[ />]$/\1/' \
  | sort \
  | uniq
