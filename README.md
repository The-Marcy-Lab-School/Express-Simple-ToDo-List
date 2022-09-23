# Express Simple To-Do List

## Directions
You are to make a simple To-Do List. You will build out an HTML/JS front-end which makes fetch calls to an Express API back-end that you build as well. This is a full CRUD application. You will code your back-end in `app.js` and your front-end in `index.js`. **There is lots of starter code to help you.** However, it's up to you to understand it and use it to your advantange.  

The frontend of your project should fullfill the following UX requirements by allowing users to be able to:
  * View a list of tasks
  * Create a task
  * Mark a task complete
  * Delete a task

## Your code must meet the following requirements:
  * Have basic styling (feel free to reference a CSS library CDN).
  * Generally, code should be clean and well-organize. (ESLint is highly encourage.)
  * **The data does not need to persists**. We'll be using an array to store our todos rather than a persistant Database. Every time you restart the back-end server, the To-Do list will reset. 

## Steps

### Set Up
  * Add dependencies. Install express, nodemon, eslint
      - `npm install express cors nodemon`
      - `npm install -D eslint`
  * In your `package.json`, add a start script that will start your back-end server with the nodemon command, `"start" : "nodemon app.js"`.
  * In your `app.js` file, `require('express')` and use it to create an express server and have it listen to an available port on your computer.
  * Run `npm start` to start your express server.
  * Using the GoLive feature in VSCode, start another server that will serve your front-end html files (if you have installed another command, you may use that to serve your frontend).

### Get All ToDos
  * Add a `GET /todos` route to your express server that will return the list of todos as a JSON response. 
  * Add code to your `index.js` file that will fetch the list of todos and render them in the browser. For each todo, you should use the existing `renderTodo()` method to render it to the DOM.  
    * You'll notice that you get a cors error if you open up your console. To fix this error, `require('cors')` package we installed earlier and have your express app use it as middleware (e.g. `app.use(cors());`). After adding it, you should no longer get a cors error.

### Create a ToDo
  * Add a `POST /todos` route that will take in a description in the request body and use it to create and add a todo to the todos list. You'll notice that there is a helper function in the todos file that is provided to easily create a todo for you. After creating the route, add a method in your front-end code that will `POST` a todo to your backend with the form is submitted. Remember that your `fetch` call will need the correct headers (i.e. `'Content-Type': 'application/json'`) and that you will need to specify the correct method as well.
    * When you make the request to you backend, you will notice that you get an error that says something like `Cannot read properties of undefined (reading 'description')`. This is because we need to add some middleware that allows express to read the body of a request. After your cors middleware, add another line `app.use(express.json());`. 

### Marking a ToDo as Complete
  * Add a `PATCH /todos/:id` or `PUT /todos/:id` route that will mark a task with that id as complete. In your front-end, once the user marks a task as complete, the UI should reflect that change.

### Deleting a ToDo
  * Add a `DELETE /todos/:id` route that will remove the todo from the list of todos. In your front-end, if a user clicks the button to delete a task, the UI should update to reflect that the todo has been removed from the list.

### Test your app from start to finish
  * Restart your servers
  * When the frontend UI loads, it should make a fetch to the back-end API and render all todos onto the DOM. You should see two todos rendered on the DOM.
  * A user should be able to create a new todo by submitting the form. This should make a fetch to  the back-end API and add the new todo to the in-memory array! Then in your front end, the new todo is rendered to the DOM.
  * A user should be able to mark a todo as complete by clicking the button. This should make a fetch to the back-end API add update the todo's `completed` property to `true`. The front-end UI should be updated to reflect the complete todo. 
  * A user should be able to delete a todo by clicking the button. This should make a fetch to the back-end API and remove the todo from the in-memory array. The todo should be removed from the front-end UI.

### Clean Up
  * After your code is complete, run the eslint command to check for errors. You should add this command to the scripts section of your package.json. `"eslint": "eslint . --fix"`

## Example Project
It always helps you see a live demo of what it is you're supposed to be bulding out. The following links might need to be **refreshed a couple of times** to work properly. 

* [HTML/JS Front-end](https://fervent-poitras-2114af.netlify.app/) hosted on Netlify
* [Express Back-end](https://ann-express-todolist-1-backend.herokuapp.com/todos) hosted on Heroku

### Additional Resources
* [Review of the different fetch methods](https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28)
* [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
