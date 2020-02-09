
```shell script
# Diff file names between to commits
### Template
git diff --name-only <SHA, tag start> <SHA, tag end>
### Example 
git diff --name-only 69ebc655 18bdde6a

# Name and status (Added, Deleted, Modified, Renamed)
### Template
git diff --name-status HEAD HEAD~3
### Example
git diff --name-status 69ebc655 18bdde6a

# With git show we getting same info but without specifying second commit
git show --name-status 69ebc655

# All files changed in all commits
git log --name-status | cat

# Show file content in specific revision
## Template
git show <HASH|Reference>:<Filename>
#### Reference can be for example HEAD~3 (3 revisions before current HEAD)

## Example
git show 2a92eb0:src/index.js

# Show commit hash and message
git log --oneline

# File list in git show with number of changes
git show --stat 10f10d5

# File list in diff-tree 
git diff-tree --no-commit-id --name-only -r 10f10d5



# Not related to this project but interesting :)
git shortlog # commit messages per author
git shortlog -s # Commits number per author
git shortlog -n -s # same as previous but sorted


```

# We can use
* `git log --name-status | cat` # then parse everything in javascript
* `git show <HASH|Reference>:<Filename>` # To insert files to the database one by one
* `git diff-tree --no-commit-id --name-only -r 10f10d5` File names only
* 
