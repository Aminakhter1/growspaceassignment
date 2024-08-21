package com.todobackend.todobackend.Service;

import com.todobackend.todobackend.Model.Status;
import com.todobackend.todobackend.Model.Todo;
import com.todobackend.todobackend.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public Todo createTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> listTodos() {
        return todoRepository.findAllByOrderByCreatedAtDesc();
    }

    public Todo updateStatus(Long id, Status status) {
        Todo todo = todoRepository.findById(id).orElseThrow();
        todo.setStatus(status);
        return todoRepository.save(todo);
    }

}
