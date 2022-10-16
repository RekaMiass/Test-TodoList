import React, {useState, useEffect} from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import ITodo from './components/interfaces';

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect (() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

    const addHandler = (title:string) => {
    const newTodo:ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id:number) => {
    setTodos(prev => prev.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }

  const removeHandler = (id:number) => {
    const sureRemove = window.confirm('Are you sure you want to delete?')
    if (sureRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

    return (
      <div className='todoApp'>
        <h4 className='header'><b>Your own Todo list!</b></h4>
        <TodoForm onAdd={addHandler}/>
        <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
      </div>
    );
}

export default App;