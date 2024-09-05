package com.yedam.control;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.common.SearchDTO;
import com.yedam.common.pageDTO;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class BoardListControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String page = request.getParameter("page");
		page = page == null ? "1" : page;  // 페이지값이 없을 경우 1페이지로 이동
		
		//검색조건 파라미터
		String sc = request.getParameter("searchCondition");
		String kw = request.getParameter("keyword");
		
		if(sc == null || kw == null || sc.isEmpty() || kw.isEmpty()) { // 검색조건이 없을시
			request.setAttribute("message", "검색조건을 입력하세요.");
		}else {
			
			SearchDTO search = new SearchDTO();
			search.setSearchCondition(sc);  // T, W, TW
			search.setKeyword(kw);			// java, html
			search.setPage(Integer.parseInt(page));
			
			
			BoardService svc = new BoardServiceImpl();
			List<BoardVO> list = svc.boardList(search);
			request.setAttribute("list", list);
			
			//페이징 처리를 위한 기능.
			int totalCnt = svc.getTotalCnt(search);
			pageDTO paging = new pageDTO(Integer.parseInt(page), totalCnt);
			request.setAttribute("paging", paging);
			
			// jsp페이지에 전달할 키워드
			request.setAttribute("sc", sc);
			request.setAttribute("kw", kw);

		}//end of if.
		
		RequestDispatcher rd = request.getRequestDispatcher("WEB-INF/board/boardList.jsp");
		rd.forward(request, response);
		
	}

}
