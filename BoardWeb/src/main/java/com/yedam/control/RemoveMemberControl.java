package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.MemberService;
import com.yedam.service.MemberServiceImpl;

public class RemoveMemberControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String id = request.getParameter("id");
		
		MemberService svc = new MemberServiceImpl();
		if(svc.removeMember(id)) {
			response.sendRedirect("html/memberList.tiles");
		}else {
			request.getRequestDispatcher("html/removeMember.tiles").forward(request, response);
		}
		
		
	}

}
