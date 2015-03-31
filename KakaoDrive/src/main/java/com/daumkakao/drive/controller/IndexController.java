package com.daumkakao.drive.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

	private static final Logger LOG = Logger.getLogger(IndexController.class);
	
	@RequestMapping(value = "/")
	public String index() {
		return "forward:/index.html";
	}
	
}
