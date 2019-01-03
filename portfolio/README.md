# Portfolio

## Angular material

> npm i --save @angular/material @angular/cdk // V < 6
> ng add @angular/material // V >= 6
> ng generate @angular/material:material-table --name=date-table
> ng generate @angular/material:material-nav --name=main-nav

## Firebase

> npm i -g firebase-tools
> firebase init
> firebase serve --only functions,hosting
> firebase deploy

```
https://www.youtube.com/watch?v=8YNw8J9Edjk&list=PLJm7_t7JnSjn__VC3sK86o2YlUuwlPKkO&index=1
https://www.youtube.com/watch?v=8YNw8J9Edjk&list=PLJm7_t7JnSjn__VC3sK86o2YlUuwlPKkO
https://www.youtube.com/watch?v=2Vf1D-rUMwE&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX
https://www.youtube.com/watch?v=LOeioOKUKI8&list=PLl-K7zZEsYLmnJ_FpMOZgyg6XcIGBu2OX&index=2
https://www.youtube.com/watch?v=3LH5QJQKX-Q
```

{
"hosting": {
"public": "public",
"ignore": [

"firebase.json",

"\*_/._",

"**/node_modules/**"

],
"rewrites": [

{

"source": "\*\*",

"destination": "/index.html"

}

]
},
"functions": {
"predeploy": [

"npm --prefix \"\$RESOURCE_DIR\" run lint"

]
}
}

Bootstrap

https://getbootstrap.com/docs/4.1/content/typography/

https://ng-bootstrap.github.io/#/components/buttons/examples
