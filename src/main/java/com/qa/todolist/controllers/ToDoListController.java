package com.qa.todolist.controllers;

import java.util.List;
import java.util.Optional;
import java.util.OptionalLong;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.google.gson.Gson;
import com.qa.todolist.entities.ToDo;
import com.qa.todolist.service.ToDoListService;

@RequestMapping
@RestController
@CrossOrigin(origins = "http://localhost:4200") 
public class ToDoListController {
	
	private ToDoListService tdlService;
	
	public ToDoListController(ToDoListService tdlService) {
		this.tdlService = tdlService;
	}
	
	@PostMapping("/createToDo")
	public void createToDo(@RequestBody ToDo toDo) {
		this.tdlService.createToDo(toDo);
	}
	
	
	@GetMapping("/getToDo/{id}")
	public ToDo getToDo(@PathVariable Long id) {
		return this.tdlService.getToDo(id);
	}
	
	@GetMapping("/getAllToDo")
	public List<ToDo> getAllToDo(){
		return this.tdlService.getAllToDo();
	}
	
	@PostMapping("/updateToDo")
	public void updateToDo(@RequestBody ToDo toDo) {
		this.tdlService.updateToDo(toDo);
	}
	
	@DeleteMapping("/deleteToDo/{id}")
	public void deleteToDo(@PathVariable Long id) {
		this.tdlService.deleteToDo(id);
	}
}
