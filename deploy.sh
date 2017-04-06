#!/bin/bash

function try {
  "$@"
  local status=$?
  if [ $status -ne 0 ]; then
      echo "!!!Error!!! with $1" >&2
      exit $?
  fi
  return $status
}

try gulp build

try git branch -D deploy
try git push origin --delete gh-pages

try git checkout -b deploy
try git add -Af build/
try git commit -m "Deploy @ $(date +'%d/%m/%Y')"
try git subtree push --prefix build origin gh-pages
try git checkout master
