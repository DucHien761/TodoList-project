import React, {useState} from 'react';
import TodoForm from './form';
import Edittodo from './Edittodo'

function TodoList() {

    // add function vs setState
    const [list_todos, setList] = useState([]);

    const addTodo = todo => {
        
        const addnewTodo = [todo, ...list_todos];

        setList(addnewTodo);
    };
    
    //render todo list 

    const handleRender = (id) => {
        let RenderList = list_todos.map(todo => {
            if (todo.id === id){
                todo.isRender = !todo.isRender;
            }
        return todo;
        });
        setList(RenderList);
    }
    
    

    return (
        <div>           
            <TodoForm onSubmit={addTodo} />
            <Edittodo list_todos={list_todos} handleRender={handleRender} />
            sss
            ssss
        </div>
    )
}

export default TodoList;