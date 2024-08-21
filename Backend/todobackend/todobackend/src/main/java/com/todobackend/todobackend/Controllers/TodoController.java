package com.todobackend.todobackend.Controllers;

import com.todobackend.todobackend.DTO.StatusUpdateRequest;
import com.todobackend.todobackend.Model.Status;
import com.todobackend.todobackend.Model.Todo;
import com.todobackend.todobackend.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="https://66c5b991796ef10073f20d62--deluxe-stardust-01f8af.netlify.app")
@RequestMapping("/todos")

public class TodoController {
    @Autowired
    private TodoService todoService;

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
        return todoService.createTodo(todo);
    }

    @GetMapping
    public List<Todo> listTodos() {
        return todoService.listTodos();
    }

    @PatchMapping("/{id}/status")
    public Todo updateStatus(@PathVariable Long id, @RequestBody StatusUpdateRequest statusUpdateRequest) {
        return todoService.updateStatus(id, statusUpdateRequest.getStatus());
    }

}
