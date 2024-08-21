package com.todobackend.todobackend.DTO;

import com.todobackend.todobackend.Model.Status;

public class StatusUpdateRequest {
    private Status status;

    // Getters and Setters
    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
