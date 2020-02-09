#!/bin/bash
repo='/guide/codeguides-server/repos/4'
cd $repo || exit
commits=$(git log --reverse --pretty=format:"%h")

id=${repo##*/}
parsedDir=/guide/codeguides-server/parsed/$id
mkdir $parsedDir

for commit in $commits; do
  echo "→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→"
  git show --oneline $commit | head -1
  files=$(git diff-tree --no-commit-id --name-status -r $commit)
  while IFS= read -r status; do
    type=$(echo $status | cut -d " " -f 1)
    file=$(echo $status | cut -d " " -f 2)
    if [ "$type" != 'D' ]; then
      dir="${file%/*}"
      mkdir -p "${parsedDir}/${commit}/${dir}"
      git show "${commit}:${file}" | cat >>"${parsedDir}/${commit}/${file}"
      echo -e "\t\033[1m\\033[32m $type $file \033[0m"
    else
      echo -e "\t\033[1m\033[31m Deleted $file \033[0m"
    fi
  done <<<"$files"
done
