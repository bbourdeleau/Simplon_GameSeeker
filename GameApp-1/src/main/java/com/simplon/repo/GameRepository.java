package com.simplon.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.simplon.entities.Games;

@CrossOrigin("*")
@RepositoryRestResource
public interface GameRepository extends JpaRepository<Games, Long >{
	@CrossOrigin("*")
	@RestResource(path="/contains")
	public List<Games> findByNameContains(String mc);
	@CrossOrigin("*")
	@RestResource(path="/creator")
	public List<Games> findByCreatorContains(String mc);
	@CrossOrigin("*")
	@RestResource(path="/genre")
	public List<Games> findByGenreContains(String mc);

}
