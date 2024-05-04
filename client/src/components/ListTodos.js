import React, {Fragment, useEffect, useState} from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
            
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(()=>{
        getTodos();
    }, []);

    return (  
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>

                {todos.map(todo=>(
                    <tr>
                        <th>{todo.description}</th>
                        <th><button>Edit</button></th>
                        <th><button>Delete</button></th>
                    </tr>
                ))}
                {/* 

                <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                </tbody>
                
                */}
                
            </table>
        </Fragment>
    );
}
 
export default ListTodos;