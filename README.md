# Memphis Web Workers Static Homepage

## Who are we?

![web workers logo](http://memphiswebworkers.com/img/webworkers.svg)

Web Workers is a community of designers, developers, UXers and all around tech- and web-savvy individuals that meet in person and online to discuss all the goings on of the wide, wide world of the Web.

## What is this repo?

The [memphiswebworkers.com](http://memphiswebworkers.com) site is generated from the code in this public repository.  Enhancements to the site are welcome!

## How can I contribute?

You're going to need a tiny bit of Node and `git` skills: get local copy of `npm`, clone this site locally, make some prospective changes, review them, and then submit a PR.

### Newer contributors

There is likely to be some low-hanging fruit available on the [repo issues page](https://github.com/web-workers/webworkers/issues).

## Building the site

### Prerequisites:

* Ruby 2 or 3 (the one that comes with OS X is OK)
* [Jekyll](https://jekyllrb.com/docs/installation/) 
* `git`
* `node` with `npm`
* `grunt-cli` installed globally (`npm install -g grunt-cli`)

### Test run

1. clone this repo
1. `npm install`
1. `grunt style` 
1. `grunt`
1. Open `http://127.0.0.1:4000` 