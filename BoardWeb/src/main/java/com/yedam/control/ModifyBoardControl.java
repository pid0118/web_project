package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class ModifyBoardControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String title = request.getParameter("title");
		String content = request.getParameter("content");
		String bno = request.getParameter("bno");
		
		
		BoardVO mvo = new BoardVO();
		
		mvo.setTitle(title);
		mvo.setContent(content);
		mvo.setBoardNo(Integer.parseInt(bno));
	
		BoardService svc = new BoardServiceImpl();
		if (svc.modifyBoard(mvo)) {
			response.sendRedirect("board/boardList.tiles");
		} else {
			request.setAttribute("massage", "수정중에 오류가 있습니다.");
			request.getRequestDispatcher("html/modifyBoardForm.tiles").forward(request, response);
		}
		
		

	}
}
