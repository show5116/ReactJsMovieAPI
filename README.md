## Nomad Coders
### ReactJS로 영화 웹 서비스 만들기

show page
https://show5116.github.io/ReactJsMovieAPI


https://nomadcoders.co/react-for-beginners/lobby

command Line

```
$ npx create-react-app learn-react 
$ cd /learn-react
$ npm i prop-types
$ npm i react-router-dom
$ npm i classnames
$ npm start
```


used react-router-dom v6

<hr/>

use git-hub pages
```
$ npm i gh-pages
$ npm run build
```
package.json add
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
},
"homepage" : "https://show5116.github.io/ReactJsMovieAPI"
```
