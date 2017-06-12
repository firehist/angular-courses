# HowTo git pull

`git pull` will retrieve latest updates from the server and merge it with your current codebase.

If you didn't change something, it'll works fine.

But if not, you might be faced to conflict between server and local files.

## Keep our changes and pull from server

1. `git stash`: Save the current work
2. `git pull`: Retrieve server informaiton
3. `git stash pop`: Restore saved work (conflict can occurs)


## Discard all our changes

1. `git reset --hard HEAD`: Discard all our local changes
2. `git pull`


## Resolving merge after conflict

[Github Help](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/)

