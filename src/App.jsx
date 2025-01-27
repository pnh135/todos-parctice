import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList';

const App = () => {
  return <main className='main-center'>
    <TodoList/>
  </main>;
};

export default App;
