# A-Frame TypeScript Typings

This is a repository for [A-Frame](http://aframe.io/) typings.

Currently this repository is a *work in progress* and provides a basic set of typings to work with `Entity` and
	`Component`. Contributors welcome <3.
  
## Usage

Include the AFRAME.d.ts file as part of your TypeScript project. An 
	[A-Frame Boilerplate](https://github.com/devpaul/ts-dojo-aframe-boilerplate) that uses these typings is available
	as a quick start. There is also a number of [A-Frame Experiments](https://github.com/devpaul/aframe-experiments) 
	written in TypeScript.

As we update typings, we plan to keep them up-to-date with the latest stable version of TypeScript.

## Developing

The quickest way to get started with adding additional types is:

* `npm install`
* `grunt watch`

And viola! Every time a change is detected the project will be rebuilt.

## Testing

Definitely Typed recommends that all typings are built against some code to ensure that they compile correctly. We
	take the additional step of running [Intern](https://theintern.github.io/intern/#what-is-intern), a real testing
	framework, against types to ensure assumptions like optional types are exercised and leaf blocks of code are
	tested.

Test can be run using `grunt test`

## Versioning

Versioning tracks the A-Frame version the typings were built and tested against. Multiple releases against the same
	version of A-Frame (i.e. due to fixes) are denoted after the dash (`-`) in the version and incremented from 0;
	i.e. 0.3.1-1 is the second release of typings against A-Frame version 0.3.1.
