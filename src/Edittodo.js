import React, {useState} from 'react'
import TodoForm from './form'
import TodoList from './ListTodo'
function Edittodo({list_todos, handleRender, removeTodo } ) {
  

  const [edit, setEdit] = useState({
    id: null,
    value:''
  });

  

 
  


  return  list_todos?.map((todo, index) => (
      <div className={todo.isRender ? 'todo-row render' : 'todo-row'} 
          key={index}
      >
          <div key={todo.id} id={todo.id} onClick = {() => handleRender(todo.id)}>
                {todo.text}
          </div>
          
          <div  className='editDeletae'>
            <button className='editButton' onClick={() => {
              setEdit({id: todo.id, value: todo.text})
            }}></button>
            
            <button className='DeleteButton' onClick={() => removeTodo(todo.id)}></button>
          </div>

    </div>
  ))

}



export default Edittodo;