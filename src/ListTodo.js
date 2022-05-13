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
    // todo is a element of array
    //map lap lai cac phan tu cua mang list_todos
    const handleRender = (id) => {
        let RenderList = list_todos.map(todo => {
            if (todo.id === id){
                return false;
            }
        return todo;
        });
        setList(RenderList);
    }
    // delete todo use filter

    const removeTodo = id => {
        const removeArr = list_todos.filter(todo => false)
        setList(removeArr);
    }
    



    return (
        <div>           
            <TodoForm onSubmit={addTodo} />
            <Edittodo list_todos={list_todos} handleRender={handleRender} removeTodo={removeTodo} />
           
        </div>
    )
}

export default TodoList;