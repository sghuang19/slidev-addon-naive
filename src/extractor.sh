FILE_PATH=${1:-"slides.md"}

# 1. Extract open tags of Naive UI components (starting with N and followed by
#    an uppercase letter)
# 2. Remove duplicates
# 3. Remove prefixes and suffixes
# 4. Remove duplicates

grep -o '<\(N[A-Z][a-zA-Z]*\|n-[a-z]\(-[a-z]\|[a-z]\)*\)[ />]' "$FILE_PATH" \
  | sort \
  | uniq \
  | sed -E 's/^<(.*)[ />]$/\1/' \
  | sed -E 's/^n/N/' \
  | sed 's/-/ /g' \
  | awk '{for (i=1; i<=NF; i++) $i=toupper(substr($i,1,1)) substr($i,2); print $0}' \
  | sed 's/ //g' \
  | sort \
  | uniq
