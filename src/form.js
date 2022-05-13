import React, { useState } from "react";


function   TodoForm(props) {
    // const [state, setState] = useState(initialStateValue)
    // gia tri ban dau la rong~
    //  
 
    const [input, setInput] = useState('');
     

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
        <form className="todoForm" onSubmit={handleSubmit}>
            <input  type="text"
                    value={input} 
                    name="text" 
                    placeholder="something want to do"  
                    onChange={handleChange}
            />
            <button className="todoButton" id="add">Add to do</button>
        </form>
    );

}

export default TodoForm;