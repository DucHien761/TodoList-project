import React, {useState} from 'react'
import TodoForm from './form'
import TodoList from './ListTodo'


function Edittodo({RenderList, handleRender} ) {
  

  const [edit, setEdit] = useState({
    id: null,
    value:''
  });

 
  


  return  RenderList?.map((todo, index) => (
    <div className={todo.isRender ? 'todo-row render' : 'todo-row'}
          key={index}
    >
      <div key={todo.id}  onClick = {() => handleRender(todo.id)}>
            {todo.text}
      </div>
    </div>
  ))

}



export default Edittodo;