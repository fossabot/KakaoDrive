package com.daumkakao.drive.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.daumkakao.drive.model.Quota;
import com.daumkakao.drive.model.Share;

@RestController
@RequestMapping(value = "/account")
public class AccountController {

	private static final Logger LOG = Logger.getLogger(AccountController.class);
	
	@RequestMapping("/quota")
	public Quota getQuota(HttpServletRequest request, HttpServletResponse response) {
		
		System.out.println(request.getRequestURI() + "?" + request.getQueryString());
		
		Quota quota = new Quota();
		
		quota.setTotalSize(FileUtils.ONE_GB * 50);
		quota.setUsedSize(FileUtils.ONE_GB * 45);
		
		return quota;
	}
	
	@RequestMapping("/share")
	public List<Share> getShareList(HttpServletRequest request, HttpServletResponse response) {
		List<Share> shareList = new ArrayList<Share>();
		shareList.add(new Share("1"));
		shareList.add(new Share("2"));
		shareList.add(new Share("3"));
		
		return shareList;
	}
}
