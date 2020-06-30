package com.simplon.entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Data 
@NoArgsConstructor 
@AllArgsConstructor 
@ToString
@Entity
public class Games implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private String genre;
	private String creator;
	private String photo;
	private int price;
	public Games(String name, String genre, String creator, String photo,int price) {
		super();
		this.name = name;
		this.genre = genre;
		this.creator = creator;
		this.photo = photo;
		this.price = price;
	}
}
