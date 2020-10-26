# Book History

A small Angular application which displays the history of changes of book entities.

Uses MariaDB as the Database.

## Setup

1. cd [ProjectDirectory]
2. docker-compose -f MariaDB/docker-compose.yml up
3. Navigate to localhost:8080 and log into the MariaDB Adminer using the credentials "root/example"
4. Create a database called "books"
5. Press "SQL Command" and execute the create and insert script (and optionally the test script)
6. node server/server.js
7. cd ../book-history
8. ng serve

## Original task description (for reference)

Create a web front-end in Angular that displays the history of changes of book entities with pagination, filtering, ordering and optionally grouping.

The book entity should have 
* An id
* A title
* A short description
* Publish date
* Authors

An example of changes could be a title was changed, an author was added, etc.
In the list of changes it should display at least the time of change and a description of what was changed (e.g. Title was changed to “The Hobbit”)
