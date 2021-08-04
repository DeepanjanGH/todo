import React from "react";
import AddTodo from "../components/AddTodo";
import ActiveTodoList from "../components/ActiveTodoList";
import CompletedTodoList from "../components/CompletedTodoList";
import Search from "../components/Search";
import { TodoContext } from "../context/TodoContext";

const TodoContainer = () => {
  return (
    <TodoContext>
      <div className='todo-container'>
        <div className='todo-header'>
          <span>To Do List</span>
          <AddTodo />
        </div>
        <Search />
        <ActiveTodoList />
        <hr></hr>
        <CompletedTodoList />
      </div>
    </TodoContext>
  );
};

export default TodoContainer;
