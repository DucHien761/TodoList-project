import React, {useState} from 'react'
import TodoForm from './form'
import TodoList from './ListTodo'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TiEdit} from 'react-icons/ti'

function Edittodo({list_todos, handleRender, removeTodo, editTodo } ) {
  

  const [edit, setEdit] = useState({
    id: null,
    value:''
  });

  

//update

const submitEdit = value => {


  editTodo(edit.id, value);


  setEdit({
    id: null,
    value: ''
  });
};

  if (edit.id){
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }
 
  
// why write a if state in className 

  return list_todos && list_todos.map((todo, index) => (
      <div key={index} className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      
          <div  key={todo.id} 
                id={todo.id} 
                onClick = {() => handleRender(todo.id)}>
                      {todo.text}
          </div>
          
          <div  className='editDeletae'>
              <AiFillCloseCircle
              //todo.id to delete only element u want
                onClick={() => removeTodo(todo.id)} 
                className='delete-icons'
              />
              <TiEdit
                onClick={() => setEdit({id: todo.id, value: todo.text})} className='edit-icons'

                />
          </div>

    </div>
  ))

}



export default Edittodo;