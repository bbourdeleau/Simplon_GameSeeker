package com.simplon.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.simplon.entities.Users;

@CrossOrigin("*")
@RepositoryRestResource
public interface UserRepository extends JpaRepository<Users, Long>{

}
