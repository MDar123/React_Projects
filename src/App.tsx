import React, { useState, useEffect } from 'react';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { Todo } from './types/todo';
import { CheckCircle, ListTodo } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState<Todo[]>(
    () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string, description: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
      description
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, title: string, description: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, title, description } : todo
    ));
  };

  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <ListTodo className="w-8 h-8 text-blue-500" />
            <h1 className="text-3xl font-bold text-gray-800">Task Manager</h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span>{completedTodos}/{todos.length} completed</span>
          </div>
        </div>

        <TodoInput onAdd={addTodo} />
        
        <div className="mt-8">
          {todos.length > 0 ? (
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <ListTodo className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No tasks yet. Add one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;