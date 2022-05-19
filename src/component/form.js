import React, { useState, useEffect, useRef } from "react";


function   TodoForm(props) {
    // const [state, setState] = useState(initialStateValue)
    // gia tri ban dau la rong~
    
    const [input, setInput] = useState(props.edit ? props.edit.value : 
    '');



    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    
   
     

    const handleChange = event => {
        // Handling Multiple Inputs
        setInput(event.target.value);
    }

 
    // event submit 
    const handleSubmit = event => {   
        event.preventDefault();




    // props.onSubmit(data)
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        });
        
        setInput('');
    };

   

    
    return  (    
        <form className="todoFrom" onSubmit={handleSubmit}>
            {props.edit ? ( 
            <>
            <input  type="text"
                    value={input} 
                    name="text" 
                    placeholder="edit item"  
                    onChange={handleChange}
                    ref={inputRef}
            />
            <button onClick={handleSubmit} className="todoButton-edit" id="add"> Edit todo</button>
            </>
            )
             :
            (
            <>  
            <input  type="text"
                    value={input} 
                    name="text" 
                    placeholder="something want to do"  
                    onChange={handleChange}
                    ref={inputRef}
            />
            <button onClick={handleSubmit} className="todoButton" id="add">Add to do </button>
            </> 
            )
             
            }
            
        </form> 
    );

}

export default TodoForm;