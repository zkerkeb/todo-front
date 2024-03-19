import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import useTodos from '../../utils/hooks/useTodos';

const TodoList = () => {
    const {todos,deleteTodo, postTodo, updateTodo} = useTodos();
    const [inputs, setInputs] = useState({
        title: '',
        description: ''
    })


    return (
        <Container>
            <form onSubmit={(e) => {
                e.preventDefault();
                postTodo(inputs.title, inputs.description);
                setInputs({title: '', description: ''});
            }
            }>
                <input
                    value={inputs.title}
                    onChange={(e) => setInputs({...inputs, title: e.target.value})}
                    name="title"    
                    placeholder="Title"/>
                <input 
                    value={inputs.description}
                    onChange={(e) => setInputs({...inputs, description: e.target.value})}
                name="description" placeholder="Description"/>
                <button type="submit">Add</button>
            </form>
            <Title>TODO</Title>
            {todos.map((todo) => {
                console.log("🚀 ~ {todos.map ~ todo:", todo)
                return(
                    <div key={todo._id}> 
                <div
                    style={{textDecoration: todo.status === 'completed' ? 'line-through' : 'none'}}
                >{todo.title}</div>
                <div 
                    style={{textDecoration: todo.status === 'completed' ? 'line-through' : 'none'}}
                >{todo.description}</div>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                    <button onClick={() => updateTodo(todo._id, todo.status === 'progress' ? 'completed' : 'progress')}>{todo.status === 'progress' ? 'Completed' : 'Progress'}</button>
                </div>
            
            )}
            )}
        </Container>
        
    );
}

const Container = styled.div`

`

const Title = styled.h1`
`

export default TodoList;