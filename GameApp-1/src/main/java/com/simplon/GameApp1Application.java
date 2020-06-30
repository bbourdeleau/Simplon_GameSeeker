package com.simplon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import com.simplon.entities.Games;
import com.simplon.entities.Users;
import com.simplon.repo.GameRepository;
import com.simplon.repo.UserRepository;

@SpringBootApplication
public class GameApp1Application implements CommandLineRunner{

	@Autowired
	private GameRepository gameRepo;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private RepositoryRestConfiguration repoRestConf;
	
	public static void main(String[] args) {
		SpringApplication.run(GameApp1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repoRestConf.exposeIdsFor(Games.class);/*
		userRepo.save(new Users("dev","ben","aa@gmail.com"));
		gameRepo.save(new Games("darksouls","RPG,die and retry,hack ans slash,action","FromSoftware", "dks.jpg",25));
		gameRepo.save(new Games("borderlands","MMO,RPG,FPS,hack ans slash,looter","GearBox", "brdlds.jpg",15));
		gameRepo.save(new Games("World Of Warcraft","MMO,RPG,action","Blizzar", "wow.jpg",45));
		gameRepo.save(new Games("Couter Strike Global Offensive","FPS,compétitif,tactique,action,coop","Valve", "csgo.jpg",20));
		gameRepo.findAll().forEach(c->{
			System.out.println(c);
		});*/
	}

}
