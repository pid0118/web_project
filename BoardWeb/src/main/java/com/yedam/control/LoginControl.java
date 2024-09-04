package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.yedam.common.Control;

public class LoginControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
		
		// session 객체 - 요청정보(브라우저)를 확인해서 쿠키를 통해서 생성된 정보 구분. 
		HttpSession session = request.getSession();
		session.setAttribute("logid", id);
		
		response.sendRedirect("boardList.do");
		
	}

}
