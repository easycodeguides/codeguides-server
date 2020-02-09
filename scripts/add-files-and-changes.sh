#!/bin/bash
repo='/guide/codeguides-server/repos/3'
cd $repo
# commits=$(git log | egrep "^commit" | cut -d " " -f 2)
commits=$(git log --pretty=format:"%h")

id=${repo##*/}
parsedDir=/guide/codeguides-server/parsed/$id
mkdir $parsedDir

for commit in $commits
do
  echo $commit
  git checkout $commit
  git show >> $parsedDir/$commit
done
