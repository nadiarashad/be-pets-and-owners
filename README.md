# Pets and Owners

[Express.js](http://expressjs.com/) is a web application framework for Node.js. It is designed for building web applications and APIs.

### Tools

1. [Insomnia](https://insomnia.rest/download/) to test your requests

### Objectives

1. Learn how to get a simple web server up and running using express.
2. Learn handling simple GET requests on your server.
3. Learn to read queries from the request your sever receives
4. Build your own static web page server.

## Intro

This sprint will help you get used to express as well as recap over the use of the file system module. A common architectural pattern is known as MVC where we split each type of job into three sections:

- _Model_: represents the different data in used by your application and handles the interactions with the database (in this case, we are using files to represent a database).
- _View_: is in charge of what to render/show to the user and using the data it is passed to create everything needed on the screen. For now, we are unconcerned with this.
- _Controller_: is like the manager. The controller function is a function that is designed to handle a specific task. It works with the model to handle any of the necessary changes to the data and will then collect up everything needed and will respond using the relevant view or data.

Here's a nice article to help with your understanding of this pattern:
[MVC Bar analogy](https://medium.freecodecamp.org/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053)

## Tasks

Now you will need to create a new express server that will implement the following:

In this sprint, we are going to create a fully functioning server that can handle the following requests: - GET - POST - PATCH - DELETE

Create the routes (think about structuring them in the relevant way). For each route, start implementing all of the logic in accessing the files etc in the relevant model method. Then in your controller, require in the relevant model and use it.

All of these routes should start with `/api/` as we are creating an API. Make them restful!

1. GET:

   - all owners
   - an owner using their id
   - all pets belonging to an owner
   - a single pet using their id

2. PATCH (don't forget to use `express.json()` to access the request body!):

   - ability to update owners name and age /owners/:id

3. POST (don't forget to use `express.json()` to access the request body!):

   - add an owner
     - Must be same format (contain the same information), you should check the other owner files for this.
     - Use a timestamp for the id, affixed with the relevant letter, o or p
   - add a pet to an owner (owner must exist) - /owners/:id/pets

4. DELETE:

   - delete a pet
   - delete an owner (and therefore any of their pets)

5. Read about [Error Handling](http://expressjs.com/en/guide/error-handling.html).

6. Update error handing in routes to use express error handling.

7. Read about [Application level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.application).

8. Create log.txt file in the root directory and a logger middleware function that writes the following to the bottom of the log file:

   - request method
   - requested url
   - time of the request

9. Create an endpoint which responds with an array of all the animals. Allow it to accept the following queries
   - `is_grumpy` - user can filter pets by temperament
   - `sort_by` - user can choose to order the pets by:
     - `id` - should default to this when no query is given.
     - `age`
     - `name`
   - `order` - can accept `asc` or `desc` (defaults to `asc` when the query isn't given.)
   - `max_age` - user can choose to only bring pets younger than passed query
   - `min_age` - user can choose to only bring pets older than passed query
