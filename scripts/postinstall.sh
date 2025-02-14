#!/bin/sh

case "$OSTYPE" in win32* | cygwin* | msys*)
  echo "[Naive] Skipping permission setting for tree-shaking script (Windows)"
  ;;
*)
  echo "[Naive] Setting execute permissions on tree-shaking script"
  chmod +x .src/extractor.sh
  ;;
esac
