package com.qa.todolist.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import com.qa.todolist.entities.ToDo;

@Transactional
@Repository
public interface ToDoListRepo extends JpaRepository<ToDo, Long> {
	
	@Modifying
	@Query("UPDATE ToDo t SET t.toDoContent = :content WHERE t.id = :toDoId")
	public void updatetoDoContent(@Param("toDoId") long toDoId, @Param("content") String content);

}
