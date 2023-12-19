# React-Playground



# always good to use carrot instead of tilde to have minor upgrade and avoid major upgrade
<!-- "devDependencies": {
    "parcel": "^2.10.3"
  } --> 


# package.json keeps record of dependencies and scripts

# package-lock.json is very imp as it keeps track of exact version of dependencies, to avoid problem os version descrepancies between production and local version.


# node modules is like mini server that feeds our need of dependencies, it has all the code and all transitive dependencies, it is deleted before pushing to production since it can be generated easily with npm install command over the server

# always maintain git.ignore file to avoid pushing node modules to github


# keep package.json and package-lock.json to production since they keep track of all dependencies



# while linking script file (app.js) tag in index.html, it is important to add type="module" as attribute to import react in the app.js file linked


# Parcel
 --- dev build
 --- local server
 --- Hot module replacement
 --- caching - faster builds
 --- Image optimisation
 --- Minification (remove comments, white spaces)
 --- Bundling (create large files combining small js and css files)
 --- compression (shrink the file size to give faster user experiences)
 --- code splitting\
 --- differential bundling (supporting old browsers)
 --- better error suggestion
 --- Https support
 --- Tree shaking (remove unused code)



# before building to production remove main: app.js from package.json to avoid conflict and error


# browser configuration to configure for 90+ percentage of browsers

<!-- "browserslist": [
    "last 10 versions"
  ] -->

# Scripts for runnning the server and build should be created npm run <script-name> is used


npm is package manager tool that helps in installing and maintaining dependencies.
parcel is web application bundler which helps in minifying , reducing all files to few large files, tree shaking also compression and many more things

parcel cache is caching mechanism previously processed information about the resource files and using them rather than processing new files everytime.


npx is package runner tool to execute the package rather than installing them globally

dependencies are package that are mandatory for application to run in production 
dev dependencies are needed only while developing like testing frameworks, build tools etc

Tree shaking is removing unused code from the resouce files before creating bundled file

hot module replacement is immediately grasping the changes in the code and rendering and updating the UI

Parcel does bundling, tree shking, compression, minifying, hot module replacement

.gitignore is the file which git does not push to production, and we mention all files in .gitignore which can be regenerated on the server

pacakage.json is the file which holds details (meta data) about project details, node version used, script files, dependencies and their versions

package-lock.json uses all the details for transitive dependencies which can be reproduced on the server
its main function is to avoid descripancies of dependencies versions.

and package-lock.json should not be modified for the same above reason to avoid problems in change of dependencies versions

node modules is the directory that holds all the necessory data of packages and their assets, code etc
and we are never supposed to push it to git repositories, and we must add them into .gitignore

dist files are generated once we execute build command---> they have minified, optimised assets ready for deployment

Script types in htmlScript types in html
type="text/javascript" ---> used for normal javascript without ES6 modules
type="module" ----> is used for Es6 modules and import and export syntax















