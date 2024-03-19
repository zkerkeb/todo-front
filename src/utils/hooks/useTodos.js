import axios from "axios";
import { useEffect, useState } from "react";


const useTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos()
    }, [])


    const fetchTodos = async () => {
        try {
            const response = await axios.get('http://localhost:3003/todos');
            setTodos(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTodo = async (id) => {
        console.log("🚀 ~ deleteTodo ~ id:", id)
        try {
            await axios.delete(`http://localhost:3003/todos/${id}`);
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    }

    const postTodo = async (title, description) => {
        try {
            await axios.post('http://localhost:3003/todos', {title, description, status: 'progress'});
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    }

    const updateTodo = async (id, status) => {
        try {
            await axios.put(`http://localhost:3003/todos/${id}`, {status});
            fetchTodos();
        } catch (error) {
            console.log(error);
        }
    }

  
    return {todos, fetchTodos, deleteTodo,postTodo, updateTodo}

}

export default useTodos;