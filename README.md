# TEMPLATE GULP

## Quick Start

```
# 1 Clone this repositori

# 2 Install all node packages
npm install

# 3 Get started
gulp browser-sync - starts localhost server with browser-sync, watches HTML, Sass, JS with hot reloading
gulp - minify CSS/JS and builds your app into the dist directory, ready for production
```

## Requirements

This project requires you have [nodejs](https://nodejs.org/en/) with [npm](https://www.npmjs.com/get-npm) installed.
This project requires you have a global installation of [gulp](http://gulpjs.com/).

```
# Install gulp globally
npm install -g gulp
```

**Bootstrap 4**
-Referenciado desde npm
-Se personalizan las utilidades desde el main.scss

**HTML / PUG**

-HTML files was build about PUG engine
-Header Footer & Navigation, works with templates from includes pug files

Package
To use Pug in your own JavaScript projects:

$ npm install pug
Command Line
After installing the latest version of Node.js, install with:

$ npm install pug-cli -g

Si se desconoce el lenguaje, quitar la tarea de gulp file, y maquetar de forma tradicional HTML5

**gulp (build)**

The default gulp command is set to creating a "dist" directory with a production version of the project, ready to be deployed.
It minifies and renames JS/CSS assets as well as cleaning the old "dist" directory. CSS is autoprefixed for the latest two browser versions.

```
gulp
```
