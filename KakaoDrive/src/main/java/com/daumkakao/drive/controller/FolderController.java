package com.daumkakao.drive.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daumkakao.drive.model.Folder;

@RestController
@RequestMapping(value = "/folder")
public class FolderController {

	private static final Logger LOG = Logger.getLogger(FolderController.class);
	
	
	@RequestMapping("/tree")
	public Folder getTopFolder(HttpServletRequest request, HttpServletResponse response) {
		
		Folder topFolder = new Folder();
		
		Folder subFolder1 = new Folder();
		subFolder1.setId("1");
		subFolder1.setName("새폴더");
		Folder subFolder2 = new Folder();
		subFolder2.setId("2");
		subFolder2.setName("새폴더 (2)----------------------------");
		Folder subFolder3 = new Folder();
		subFolder3.setId("3");
		subFolder3.setName("새폴더 (3)");
		
		topFolder.getChildren().add(subFolder1);
		topFolder.getChildren().add(subFolder2);
		topFolder.getChildren().add(subFolder3);
		
		Folder subFolder3_1 = new Folder();
		subFolder3_1.setId("3_1");
		subFolder3_1.setName("새폴더 (3) (1)");
		Folder subFolder3_2 = new Folder();
		subFolder3_2.setId("3_2");
		subFolder3_2.setName("새폴더 (3) (2)");
		
		subFolder3.getChildren().add(subFolder3_1);
		subFolder3.getChildren().add(subFolder3_2);
		
		
		Folder subFolder3_1_1 = new Folder();
		subFolder3_1_1.setId("3_1_1");
		subFolder3_1_1.setName("새폴더 (3) (1) (1)");
		subFolder3_1.getChildren().add(subFolder3_1_1);
		
		return topFolder;
	}
}
