# Express Simple To-Do List

## Directions
You are to make a simple To-Do List using the Express framework. Your project should fullfill the following UX requirements. Users should be able to:
  * View a list of tasks
  * Create a task
  * Mark a task complete
  * Delete a task

## Steps
  * Add dependencies
    * Install express, nodemon, eslint
      - `npm install express`
      - `npm install -D nodemon eslint`
  * In your `app.js` file, create an express server and have it listen to an available port on your computer.
  * Add an npm start script that will start your development server with the nodemon command.
  * Using the LiveServer command in VSCode, start another server that will serve your html files (you may have installed another command - in that case, you the command you have been using to serve your html frontend).
  * Require the todos from the todos files and add a `GET /todos` route to your server that will return the list of todos as a JSON response. 
  * Add code to your index.js file that will fetch the list of todos and render them in the browser (to start this will be an empty list).
  * Add a `POST /todos` route that will take in a description in the request body and use it to create and add a todo to the todos list. You'll notice that there is a helper function in the todos file that is provided to easily create a todo for you. After creating the route, add a method in your browser code that will `POST` a todo to your backend. Remember that your `fetch` call will need the correct headers (i.e. `Content-Type: 'application/json'`) and that you will need to specify the correct method as well.
  * Add a `PATCH /todos/:id` route that will mark a task with that id as complete. In your frontend, provide either a checkbox or a button that allows the user to mark the task as complete. Once the task is marked as complete, the UI should reflect that change.
  * Add a `DELETE /todos/:id` route that will remove the todo from the list of todos. Your UI should update to reflect that the todo has been removed from the list of todos.

Your code must meet the following requirements:
  * Have basic styling (feel free to reference a CSS library CDN).
  * Generally, code should be clean and well-organize. (ESLint is highly encourage.)
  * **The data does not need to persists**. If you restart the server, the To-Do list will be cleared out. 

