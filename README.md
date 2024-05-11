# Music tracks app

Music tracks app built with SvelteKit, SQLite, better-sqlite3, Bulma and [Chinook](https://www.sqlitetutorial.net/sqlite-sample-database/) dataset. Based on the tutorial created by [Philipp Hartenfeller](https://youtu.be/iO4VUbQ6ua4?si=PF23N6uMB0VBU05U).

The goal of this exercise is to practice working with SvelteKit and how it connects to and loads and inserts data into SQLite. Secondary goal is to practice working with Git & GitHub.

## How it works
WIP

## Lessons learned
WIP: Why SvelteKit?

### Connecting to SQLite
WIP: Install better-sqlite3

### Loading data
WIP: Testing the query
WIP: Defining data types 

### Style
Linking Bulma via CDN

Minimal styling is applied to the app. Here are the steps how it was done.
1. Visit https://bulma.io/documentation/start/installation/ and copy the CDN HTML <link>.
2. Open the ./src/app.html file and add the code into the <head> element.
3. To apply the Bulma table CSS and 'class="table"' to the <table> element in the ./src/routes/+page.svelte file. 

### Routing
WIP: Routing basics with ./routes directory and +page.svelte.file

WIP: Creating dynamic routes

### Error handling
WIP

### Updating the data
WIP

### Server-side search with API-Endpoint
WIP