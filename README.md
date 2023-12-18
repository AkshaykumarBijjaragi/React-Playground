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


