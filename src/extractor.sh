FILE_PATH=${1:-"slides.md"}

grep -o '<\(N[A-Z]\|n-\)[A-Za-z-]*' "$FILE_PATH" \
  | sort -u \
  | sed -E 's/^<//' \
  | awk -F'-' '$1 == "n" {
      OFS=""
      for (i=1; i<=NF; i++)
        $i=toupper(substr($i,1,1)) substr($i,2)
    } 1' \
  | sort -u
