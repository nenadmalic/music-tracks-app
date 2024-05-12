# Music tracks app

Music tracks app built with SvelteKit, SQLite, better-sqlite3, Bulma and [Chinook](https://www.sqlitetutorial.net/sqlite-sample-database/) dataset. Based on the tutorial created by [Philipp Hartenfeller](https://youtu.be/iO4VUbQ6ua4?si=PF23N6uMB0VBU05U).

The goal of this exercise is to practice working with SvelteKit and how it connects to and loads and inserts data into SQLite. Secondary goal is to practice working with Git & GitHub.

## How it works
WIP

SvelteKit 2.5.7 used.

## Lessons learned
WIP: Why SvelteKit?


### Connecting to SQLite
WIP: Install better-sqlite3

### Loading data
WIP: Testing the query
WIP: Defining data types 

### Style

#### Linking Bulma via CDN

Minimal styling is applied to the app. Here are the steps how it was done.
1. Visit https://bulma.io/documentation/start/installation/ and copy the CDN HTML <link>.
2. Open the ./src/app.html file and add the code into the <head> element.
3. To apply the Bulma table CSS and 'class="table"' to the <table> element in the ./src/routes/+page.svelte file. 

### Routing

#### Routing basics with ./src/routes directory and +page.svelte.file
Routes are the URL paths that users can access. SvelteKit routes are filesystem-based, meaning that the routing of the app is determined by the structure of the files and folders in your project. The routes directory is located in the ./src folder by default. Its location can be changed in the project's configuration in a svelte.config.js file at the root of the project. Example:
./src/routes
./src/routes/about
./src/routes/contact

#### WIP: Creating dynamic routes
SvelteKit allows for dynamic routing by using file names or directory names that start with '[' and end with ']'. For example, a file at ./src/routes/blog/[id].svelte would correspond to routes like /blog/1, /blog/2, etc., with the id parameter available in your Svelte component.

#### WIP: Capitalized vs non-capitalized file names
WIP

### Error handling
WIP

### Updating the data
WIP

### Server-side search with API-Endpoint
WIP