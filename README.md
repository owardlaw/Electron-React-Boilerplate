# Electron React Boilerplate
This repositry is a boilerplate for Electron and React. It is a great starting point for any electron application using react. Reap all the benefits of electron and react together with no hassle of setting up the base enviorment.

## Getting started 
Install packages via npm or yarn, yarn is recommended.

```console
yarn
```

## Electron functions

Start the electron application. 
```console
yarn electron:serve
```

Build the electron application for the local system.
```console
yarn electron:build
```

[Electron-builder](https://www.npmjs.com/package/electron-builder) is a great alternative to build for all systems without changing "package.json". 

## Easy way to create a self updating application via electron and skipping electron-react combination
In "public/main.js" change win.loadURL(<URL_HERE>) url to the website you want to render. You can simply replace this with a site of choice or develop a react site, host it, and render it as an app with electron. 

## Application

![Alt text](app.png?raw=true "Application")

## .gitignore
Gitignore is set up to ignore both React and Electron files.

