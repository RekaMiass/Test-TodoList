import React from 'react';
import ITodo from './interfaces';
  
type TodoListProps = {
    todos: ITodo[]
    onToggle(id:number): void
    onRemove:(id:number) => void
}

const TodoList: React.FC<TodoListProps> = ({
    todos,
    onRemove,
    onToggle
  }) => {
    if (todos.length === 0) {
      return <p className='notasks'>There are no tasks!</p>
    }

  const removeHandler = (event:React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  return (
    <ul className='tasks-list'>{todos.map(todo => {
      const classes = ['todo']
      if (todo.completed) {
        classes.push('completed')
      }
      return (
        <li key={todo.id} className={classes.join(' ')}>
          <label className='labeli'>
              <input className='checkbox' type='checkbox' checked={todo.completed} onChange={onToggle.bind(null, todo.id)}/>
              <span>{todo.title}</span>
              <i className='material-icons' onClick={event => removeHandler(event, todo.id)}>delete</i>
          </label>
        </li>
        )
      })}
    </ul>
  )
}

export default TodoList;