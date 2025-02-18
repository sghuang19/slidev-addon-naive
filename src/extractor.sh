FILE_PATH=${1:-"slides.md"}

grep -o '<\(N[A-Z]\|n-\)[A-Za-z-]*' "$FILE_PATH" \
  | sort | uniq \
  | sed -E 's/^<//' \
  | while read -r line; do
    case "$line" in
      N[A-Z]*)
        echo "$line"
        ;;
      n-*)
        echo "$line" \
          | sed 's/-/ /g' \
          | awk '{
              for (i=1; i<=NF; i++)
                $i=toupper(substr($i,1,1)) substr($i,2)
                print $0
            }' \
          | sed 's/ //g'
        ;;
    esac
  done \
  | sort | uniq
