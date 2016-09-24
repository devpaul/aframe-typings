# A-Frame w/ TypeScript template

This is a boilerplate for developing [A-Frame](http://aframe.io/) VR Applications. 
It features a complete development environment including

* [A-Frame](https://aframe.io)
* [TypeScript](https://www.typescriptlang.org/)
* [Dojo 2](http://dojotoolkit.org/community/roadmap/)
* [Intern](http://theintern.github.io/)
* [Grunt](http://gruntjs.com/)

We hope this is a useful starting place to begin your project <3.

## Quick Start

* `npm install`
* `typings install`
* `grunt`
* launch http://localhost/_build/index.html

## Publish to GitHub Pages

This boilerplate supports publishing to a GitHub Pages website. Simply type:

`grunt publish`

Your entire project will be built, all of the libs copied to the `dist` directory, and the `dist` directory
will be checked into the `gh-pages` to be hosted by GitHub. 

See our boilerplate at [https://devpaul.github.io/ts-dojo-aframe-boilerplate](https://devpaul.github.io/ts-dojo-aframe-boilerplate)

## TODOs

* Test/Ensure Vive support
* Add instructions for obtaining supported Vive browsers (FF nightly and Chrome)
* Add A-Frame (three.js, etc...) typings
* Add a quickstart getting start w/ development
* Implement a mobile + https development server + proxy solution w/ instructions
	* self-signed certs
	* ngrok
	* Lets Encrypt + Proxy
	* localhost
* Improve Gruntfile neatness
* Add some unit tests
* Add functional testing strategy + examples (maybe adapter pattern?)

## Grunt Commands

* `grunt` - compiles files
* `grunt watch` - watches files for changes and rebuilds
* `grunt lint` - validates style rules
* `grunt test` - runs intern's node client
* `grunt test-local` - runs intern's runner with local configuration
* `grunt test-proxy` - starts intern's testing proxy
* `grunt test-runner` - runs intern's runner
* `grunt ci` - runs tests in a continuous integration environment
* `grunt clean` - cleans development work
* `grunt dist` - builds a distribution ready to be published
* `grunt publish` - builds a dist and publishes it to Github Pages
