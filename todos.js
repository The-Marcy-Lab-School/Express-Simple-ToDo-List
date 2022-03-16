const crypto = require("crypto");

const todos = [createTodo("my first todo!")];

function createTodo(description) {
  const id = crypto.randomBytes(16).toString("hex");

  return {
    id,
    description,
    completed: false,
  };
}

module.exports = {
  todos,
  createTodo,
};
