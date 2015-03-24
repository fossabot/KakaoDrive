package com.daumkakao.drive.model;

import java.util.ArrayList;
import java.util.List;

public class Folder {

	private String id;
	private String name;
	private List<Folder> children;
	
	public Folder() {
		children = new ArrayList<Folder>();
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Folder> getChildren() {
		return children;
	}
	public void setChildren(List<Folder> children) {
		this.children = children;
	}
	
	
	
}
