# AngApp

App Quickstart
# $ npm install @angular/cli
# $ ng new <project name>
# $ cd <project name>
# $ ng serve -p 8080 -H 0.0.0.0 --public-host angular-sandbox-komogortev.c9users.io
---------------------
# $ ng build --env=prod --output-hashing

App default styling
# $ npm install bootstrap --save
## .angular-cli.json -> <...>styles": ["../node_modules/bootstrap/dist/css/bootstrap.min.css",<...>
#  npm install --save @types/lodash

Create component module
# $ ng g c <module name> --spec false #//optional spec file file for testing ##// run in app folder @ik

Create service
# $ ng g s <service name> --spec false #//optional spec file for testing 

---------------------------------------------------------------------------
Git sync
# $ git init
# $ git add .
# $ git commit -m "first commit"
# $ git remote add origin https://github.com/username/project.git84
# $ git push -u origin master


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
##$ ng serve -p 8080 -H 0.0.0.0 --public-host angular-sandbox-komogortev.c9users.io


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## $ng g c user-detail - create component folder automatically importing into appComponent. *with testing unit **g=generate ***c=component