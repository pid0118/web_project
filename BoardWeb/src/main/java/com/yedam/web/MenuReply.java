package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.AddReplyControl;
import com.yedam.control.RemoveReplyControl;
import com.yedam.control.RemoveReplysControl;
import com.yedam.control.ReplyCountControl;
import com.yedam.control.ReplyListControl;
import com.yedam.control.ReplyTableControl;

public class MenuReply {
	private static MenuReply instance = new MenuReply();
	
	private MenuReply() {
	}
	
	public static MenuReply getInstance() {
		return instance;
	}
	
	public Map<String, Control> menuMap(){
		Map<String, Control> menu = new HashMap<>();
		// 댓글의 목록을 json 형식으로 출력하는 메세지
		menu.put("/replyList.do", new ReplyListControl());
		//삭제 컨트롤
		menu.put("/removeReply.do", new RemoveReplyControl());
		menu.put("/removeReplys.do", new RemoveReplysControl());
		//등록 컨트롤
		menu.put("/addReply.do", new AddReplyControl());
		//댓글 건수컨트롤
		menu.put("/replyCount.do", new ReplyCountControl());
		
		// 댓글작성 dataTable용
		menu.put("/replyTable.do", new ReplyTableControl());
		
		return menu;
	}
	
}
