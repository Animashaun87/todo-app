import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const {
    clearList,
    handleDelete,
    handleEdit,
    completeHandler,
    filteredTodos,
  } = props;
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center text-white">todo list</h3>
      {filteredTodos &&
        filteredTodos.map((item) => {
          return (
            <TodoItem
              key={item.id}
              text={item.text}
              todo={item}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
              completeHandler={() => completeHandler(item.id)}
            />
          );
        })}

      <button
        type="button"
        className="btn btn-danger btn-block text-capitalize mt-5"
        onClick={clearList}
      >
        clear list
      </button>
    </ul>
  );
}

export default TodoList;
