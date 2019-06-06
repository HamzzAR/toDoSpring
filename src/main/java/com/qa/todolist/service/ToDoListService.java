package com.qa.todolist.service;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.qa.todolist.entities.ToDo;
import com.qa.todolist.repo.ToDoListRepo;

@Service
public class ToDoListService {
	
	private ToDoListRepo tdlRepo;
	
	public ToDoListService(ToDoListRepo tdlRepo) {
		this.tdlRepo = tdlRepo;
	}
	
	public void createToDo(ToDo toDo) {
		this.tdlRepo.save(toDo);
	}
	
	public ToDo getToDo(long id) {
		if(this.tdlRepo.existsById(id)) {
			return this.tdlRepo.findById(id).get();
		}
		else {
			return new ToDo();
		}
		
	}
	
	public List<ToDo> getAllToDo(){
		return this.tdlRepo.findAll();
	}
	
	public void updateToDo(ToDo toDo) {
		this.tdlRepo.updatetoDoContent(toDo.getId(), toDo.getContent());
	}
	
	public void deleteToDo(long id) {
		this.tdlRepo.deleteById(id);
	}
}
