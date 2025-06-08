# electron-skeleton

You need node.js and npm to build app

npm run make
/out/make/squirrel.windows/x64/

How I did get here?
following https://www.electronjs.org/pt/docs/latest/tutorial/tutorial-prerequisites
npm init on project root folder
changed index.js to main.js
npm install electron --save-dev
adding .gitignore
npm install --save-dev @electron-forge/cli
npx electron-forge import
removed some makers and kept the maker for windows .exe