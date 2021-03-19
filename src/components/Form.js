import React, { useEffect, useRef } from "react";

function Todo(props) {
  const {
    inputText,
    handleChange,
    handleSubmit,
    editItem,
    statusHandler,
  } = props;

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-secondary text-white">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            type="text"
            ref={inputRef}
            placeholder="Enter text"
            className="form-control"
            value={inputText}
            onChange={handleChange}
          />
          <div className="input-group-prepend">
            <select
              onChange={statusHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-info mt-3"
              : "btn btn-block btn-secondary mt-3"
          }
        >
          {editItem ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default Todo;
