Learnings---------------------------------Lecture 01


Write hello world program using HTML/JS/React

Ways of importing React to your project
1 - By CDN (content delivery network)
import links and React will be present in  your proj
There are 2 links -- 1for React core, 2nd for DOM operations


REACT element is JS object
Order of files matter alot in script tag

render method replaces whole HTML block who is root

createElement ("HTML Tag", "Attribute", "[Child]")

React is a library and not a full fledged framework

Html parsing scenarios==
1- normal ---------Parsing will stop for fetching and execution when there is script call
2 - using "async"---Parsing will stop for execution only while fetching happens parallel, when there is script call
3 - using "defer"---Parsing will not stop for execution and fetching when there is script call, fetching and execution will take place after parsing


The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.


Key Differences between Framework and Library
A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.

React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data.

REACT VS REACT DOM

==============================================================================================================================================

Learnings---------------------------------Lecture 02


NPM - package manager

create own react app 

npm init

package.json ------ maintains ~/^ version [Tilde( ~ ) allows for patch updates, while caret( ^ ) allows for both minor and patch updates

npm install -D parcel ------------(-D for Dev dependencies)
PARCEL is bundler, which used to build, minification and optimizing etc our app

#Parcel
Dev build
Local server
HMR =Hot module replacement
File watching algorithm, written in C++
Image optimization
Minification
Bundling
Compress
consistent hashing
code splitting
differential bundling
diagnostic
error
https
tree shaking
different build for dev and prod

below both files will got generate in your VS code
package.lock.json ------- it contains all current exact version's track and history
node modules --- contains all dependencies/code which present in package file required

we dont push node modules to GIT, bcoz they are big in size 
but we can create node modules using an exosting pkg.json and pkg.lock.json

to start
npx parcel index.html

npm --- uses for intallation
npx --- uses for execution

npm install react
npm i react-dom   ---(i is same as install)

import React and React-dom from "react" & "react-dom" 
remove cdn links, include type ="module" in script tag for App.js

What parcel does
when you execute 
it generates dev build of your proj and host on 1234, it puts all build in dist folder, files are coming from parcel-cahce and dist folder


Make your app compatible for desired Browser versions
go to package.json --> add "browserslist":["Last 2 Chrome versions",]
