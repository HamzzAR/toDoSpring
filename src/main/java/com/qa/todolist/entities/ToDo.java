package com.qa.todolist.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
public class ToDo {
	@Id
	@GeneratedValue
	@JsonProperty("id")
	private long id;
	
	@JsonProperty("content")
	private String toDoContent;
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getContent() {
		return toDoContent;
	}
	
	public void setContent(String toDoContent) {
		this.toDoContent = toDoContent;
	}
}
