package com.simplon.web;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.simplon.entities.Games;
import com.simplon.entities.Users;
import com.simplon.repo.GameRepository;
import com.simplon.repo.UserRepository;

@CrossOrigin("*")
@RestController
public class MainRestController {
	
	@Autowired
	private GameRepository gameRepo;
	@Autowired
	private UserRepository userRepo;

	
	@GetMapping(path="/gamePhoto/{id}",produces = MediaType.IMAGE_JPEG_VALUE)
	public byte[] getPhoto(@PathVariable("id") long id) throws Exception {
		Games g=gameRepo.findById(id).get();
		return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/img/games/"+g.getPhoto()));
		
	}
	@CrossOrigin("*")
	@PostMapping("/addGame")
	public void addGames(@RequestBody Games g) {
		gameRepo.save(g);
	}
	@CrossOrigin("*")
	@PostMapping("/register")
	public void register(@RequestBody Users u) {
		userRepo.save(u);
	}
	@CrossOrigin("*")
	@PostMapping("/upload/{id}")
	public void UploadPhoto(MultipartFile file,@PathVariable Long id) throws IOException {
		Games game = gameRepo.findById(id).get();
		game.setPhoto(id+".jpg");
		Files.write(Paths.get(System.getProperty("user.home")+"/img/games/"+game.getPhoto()), file.getBytes());
		gameRepo.save(game);
	}
	@CrossOrigin("*")
	@PostMapping("/update/{id}")
	public void updateGame(@PathVariable long id,@RequestBody Games g) {
		Games gameToUpdate =  new Games();
		gameToUpdate=gameRepo.getOne(id);
		gameToUpdate.setName(g.getName());
		gameToUpdate.setGenre(g.getGenre());
		gameToUpdate.setCreator(g.getCreator());
		gameToUpdate.setPrice(g.getPrice());
		gameRepo.save(gameToUpdate);
	}
}
