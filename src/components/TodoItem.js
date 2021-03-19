import React from "react";
import "../utils/styles/style.css";

function TodoItem(props) {
  const { text, todo, handleDelete, handleEdit, completeHandler } = props;

  return (
    <li className="list-group-item d-flex justify-content-between my-2">
      <h6 className={`${todo.completed ? "completed" : ""}`}>{text}</h6>
      <div className="todo-icon">
        <span className="mx-2 text-success" onClick={completeHandler}>
          <i className="fas fa-check" title="check" />
        </span>
        {/* <button
          type="button"
          onClick={completeHandler}
          className="complete-btn"
        >
          check
        </button> */}
        <span className="mx-2 text-success" onClick={handleEdit}>
          <i className="fas fa-pen" title="Edit" />
        </span>
        {/* <button type="button" onClick={handleEdit}>
          Edit
        </button> */}
        <span className="mx-2 text-danger" onClick={handleDelete}>
          <i className="fas fa-trash" title="Delete"></i>
        </span>
        {/* <button type="button" onClick={handleDelete} className="trash-btn">
          Delete
        </button> */}
      </div>
    </li>
  );
}

export default TodoItem;
