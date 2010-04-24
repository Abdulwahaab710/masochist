---
tags: git snow.leopard
---

# Local update ([Mac OS X](/wiki/Mac_OS_X) 10.6.3 [Snow Leopard](/wiki/Snow_Leopard))

Notes made while updating from [Git 1.7.0.4](/wiki/Git_1.7.0.4) to [Git 1.7.1](/wiki/Git_1.7.1) (skipped over [Git 1.7.0.5](/wiki/Git_1.7.0.5)) from within a local clone of the official upstream [Git](/wiki/Git) repository on [Mac OS X](/wiki/Mac_OS_X) 10.6.3 [Snow Leopard](/wiki/Snow_Leopard):

```shell
$ git fetch
$ git tag -v v1.7.1
$ git co v1.7.1                                                       # "co" is an alias for "checkout"
$ make clean
$ make prefix=/usr/local test
$ sudo make prefix=/usr/local install quick-install-man
$ diff -u ~/.git-completion.sh contrib/completion/git-completion.bash # any changes to Bash completion?
$ cp contrib/completion/git-completion.bash ~/.git-completion.sh      # yes, install it
```

# Remote update (Fedora Linux)

Not yet performed. See [ticket \#1489](/issues/1489).
