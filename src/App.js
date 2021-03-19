import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use Effect
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to local storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //creating new item
    const newItem = {
      id: Math.random() * 1000,
      text: inputText,
      completed: false,
    };

    console.log(newItem);
    if (newItem.text !== "") {
      setTodos([...todos, newItem]);
      setEdit(false);
    }
    setInputText("");
  };

  const clearList = () => {
    setTodos([]);
  };

  const handleDelete = (id) => {
    const filteredItems = todos.filter((item) => item.id !== id);
    setTodos(filteredItems);
  };

  const handleEdit = (id) => {
    const filteredItems = todos.filter((item) => item.id !== id);
    const selectedItem = todos.find((item) => item.id === id);
    setTodos(filteredItems);
    setInputText(selectedItem.text);
    setEdit(true);
  };

  const completeHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center text-white mt-4">
            Bidemi Todo App
          </h3>

          <Form
            inputText={inputText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={edit}
            statusHandler={statusHandler}
          />

          <TodoList
            items={todos}
            clearList={clearList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            completeHandler={completeHandler}
            filteredTodos={filteredTodos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
