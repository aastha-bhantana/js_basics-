// git & github
//vcs
//Git = Managing your code history.GitHub = Storing and sharing your code online.
//git -> distributed version control system


//final 

//* repository / repo 
//local 
//remote 


//* config identity 
//? git config --global --list
// git config --global pull.rebase false
// git config --global init.defaultbranch main

//* initialize empty git repo
//? git init

//* working directory (changes)
//* staging area 
//* commit
//* repository

// wd -> staging ->local repo (commit)

//? git status 
//? git add <file_path>
//? git add . -> add all changes 
//? git commit -m "<commit_message>"

//? git log -> log commit history
//? git log --oneline -> log commit history in one line

//* branch
//? git branch -> list all local branch
//? git branch <branch_name> -> create new branch
//? git switch <branch_name> -> switch to branch  // git checkout <branch_name> 
//? git switch -c <branch_name> -> create and switch to new branch
//? git checkout -b <branch_name> -> create and switch to new branch


//* merge
//? git merge <branch_name> -> merge branch into current branch

// main: a -> b 
// new:       c -> d
// main: a -> b -> c -> d

//* main: a -> b -> e -> f
// new:     b -> c -> d
// main: a -> b -> c -> d -> e -> f -> merge commit 


//*  merge conflict
//? git merge <branch_name> -> merge branch into current branch
//? git status -> check for conflicts
//? git add <file_path> -> mark conflict as resolved
//? git commit -m "<commit_message>" -> commit the merge