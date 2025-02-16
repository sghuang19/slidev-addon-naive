set -m
(
  bun run dev &
  pid1=$!
  vercel dev -l 3030 &
  pid2=$!
  trap "kill 0" INT TERM EXIT
  wait
)
