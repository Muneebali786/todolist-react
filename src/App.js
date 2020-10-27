import React from 'react';
import './App.css';
import TodoList from "./components/todoList";
import Nav from './components/nav';

function App() {
  return (
      <>
      <Nav />
        <div className="container">
          <TodoList />
        </div>
      </>
    
  );
}

export default App;
