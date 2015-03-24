package com.daumkakao.drive.controller;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daumkakao.drive.model.Quota;

@RestController
@RequestMapping(value = "/account")
public class AccountController {

	private static final Logger LOG = Logger.getLogger(AccountController.class);
	
	@RequestMapping("/quota")
    public Quota getQuota() {
		
		Quota quota = new Quota();
		
		quota.setTotalSize(FileUtils.ONE_GB * 50);
		
		return quota;
	}
}
