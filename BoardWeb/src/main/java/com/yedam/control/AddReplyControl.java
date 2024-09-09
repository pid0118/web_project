package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.yedam.common.Control;
import com.yedam.service.ReplyService;
import com.yedam.service.ReplyServiceImpl;
import com.yedam.vo.ReplyVO;

public class AddReplyControl implements Control {

	@Override
	public void exec(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 댓글작성자, 원본글번호 , 댓글내용.
		String replyer = request.getParameter("replyer"); 
		String reply = request.getParameter("reply");
		String bno = request.getParameter("bno");
		//retCod=>OK . retCode=>NG .
		ReplyVO rvo = new ReplyVO();
		rvo.setBoardNo(Integer.getInteger(bno));
		rvo.setReply(reply);
		rvo.setReplyer(replyer);
		
		ReplyService svc = new ReplyServiceImpl();
		if(svc.addReply(rvo)) { //repltNo에 값이 지정.
			//{"retCod": "OK" , "retVal": {"replyNo": "+19+", "reply": "reply", "replyer": "replyer", "boardNo": 148}}
			response.getWriter().print("{\"retCod\": \"OK\" , \"retVal\": {\"replyDate\": \""+ rvo.getReplyDate()
									  +" {\"replyNo\": "+rvo.getReplyNo()+", \"reply\":"+rvo.getReply()+""
									  + ", \"replyer\":"+rvo.getReplyer()+", \"boardNo\": "+rvo.getBoardNo()+"}}");
		}else {
			//{"retCod": "NG"}
			response.getWriter().print("{\"retCod\": \"NG\"}");
		}
		
		
		
		
	}

}
