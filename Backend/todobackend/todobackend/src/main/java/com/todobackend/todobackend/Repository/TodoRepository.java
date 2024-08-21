package com.todobackend.todobackend.Repository;

import com.todobackend.todobackend.Model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo,Long> {
    List<Todo> findAllByOrderByCreatedAtDesc();

}
