package com.daumkakao.drive.controller;

import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class IndexController {

	private static final Logger LOG = Logger.getLogger(IndexController.class);
	
	//@RequestMapping(value = "/")
	public ModelAndView index() {
		ModelAndView mav = new ModelAndView("index.html");
		return mav;
	}
	
}
