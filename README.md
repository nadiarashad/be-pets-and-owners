# Pets and Owners

## Part 1 (Day 1 Morning)

[Express.js](http://expressjs.com/) is a web application framework for Node.js. It is designed for building web applications and APIs.

### Tools

1. [Postman](https://www.getpostman.com/) to test your requests

### Objectives
1. Learn how to get a simple web server up and running using express.
2. Learn handling simple GET requests on your server.
3. Learn to read queries from the request your sever receives
3. Build your own static web page server.

### Tasks:

For now, do not worry about testing!

1. Repeat the 'Hello World' example from this mornings lecture
2. Create a route for each type of request and send a text response. Here are some [examples](https://expressjs.com/en/starter/basic-routing.html)
    - GET
    - POST
    - PUT
    - DELETE
3. Make each of your routes you created above handle a query and use that query in your response
    e.g:
    ```
    http://localhost:3000/my-route?name=Northcoders
    -->
    Got a PUT request on my-route with a name query which was Northcoders
    ```

## Part 2 (Day 1 afternoon + Day 2)

## Before

Just rename the file you used for hello world to `helloworld.js` and create a new `app.js` and `listen.js` file for this part.

## Intro

This sprint will help you get used to express as well as recap over the use of the file system module. A common architectural pattern is known as MVC where we split each type of job into three sections:

* *Model*: represents the different data in used by your application and handles the interactions with the database (in this case, we are using files to represent a database).
* *View*: is in charge of what to render/show to the user and using the data it is passed to create everything needed on the screen. For now, we are unconcerned with this.
* *Controller*: is like the manager. The controller function is a function that is designed to handle a specific task. It works with the model to handle any of the necessary changes to the data and will then collect up everything needed and will respond using the relevant view or data.

Here's a nice article to help with your understanding of this pattern:
[MVC Bar analogy](https://medium.freecodecamp.org/model-view-controller-mvc-explained-through-ordering-drinks-at-the-bar-efcba6255053)

## Tasks

Now you will need to create a new express server that will implement the following:

In this sprint, we are going to create a fully functioning server that can handle the following requests:
    - GET
    - POST
    - PATCH
    - DELETE

Create the routes (think about structuring them in the relevant way). For each route, start implementing all of the logic in accessing the files etc in the relevant model method. Then in your controller, require in the relevant model and use it.

All of these routes should start with `/api/` as we are creating an API. Make them restful!

1. GET:
    * all owners
    * an owner using their id
    * all pets belonging to an owner
    * a single pet using their id

2. PATCH:
    * ability to update owners name and age /owners/:id

3. POST (don't forget to add bodyparser and to send the data in json format):
    * add an owner 
        1. Must be same format (contain the same information), you should check the other owner files for this.
        2. Use a timestamp for the id, affixed with the relevant letter, o or p
    * add a pet to an owner (owner must exist) - /owners/:id/pets

4. DELETE:
    * delete a pet
    * delete an owner (and therefore any of their pets)

5. Read about [Error Handling](http://expressjs.com/en/guide/error-handling.html).

6. Update error handing in routes to use express error handling.

7. Read about [Application level middleware](http://expressjs.com/en/guide/using-middleware.html#middleware.application).

8. Create log.txt file in the root directory and a logger middleware function that writes the following to the bottom of the log file:
    - request method
    - requested url
    - time of the request
