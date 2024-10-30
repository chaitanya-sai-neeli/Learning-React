Learing react js from scratch as a beginner.
* Package .json is a configuration for npm. It keeps a track of what version of that package is installed in to the system. It maintains the version of our dependencies.
* Packagelock.json keeps track of exact version, locks the version and keeps track of it.
* There are 2 types of depedencies we can install:
    1. Dev dependencies (Mostly used in development phase)
    2. Nomal dependencies (Used in production)
* Transitive dependencies : Our Project --> Parcel --> dependencies --> dependencies
* Parcel : Powerful is a bundler it also helps in Dev build, Local Server, HMR (Hot Module Replacement) using File Watching Algorithm written in C++, Caching- Faster builds, Image Optimisation, Minification, Bundling, Compressing, Tree Shaking, Diagonostics, Code splitting, Differential bundling
* With the help of package.json and packagelock.json-we can regenerate node modules, so we need not to push node_modules in to our Github
* npm - calling command of npm where as npx means executing a npm package parcel with a source file as index.html 
* Till this point we were using React from CDN links but from now on we will be using react from node modules.