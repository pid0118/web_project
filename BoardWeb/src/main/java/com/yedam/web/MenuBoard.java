package com.yedam.web;

import java.util.HashMap;
import java.util.Map;

import com.yedam.common.Control;
import com.yedam.control.AddBoardControl;
import com.yedam.control.BoardControl;
import com.yedam.control.BoardFormControl;
import com.yedam.control.BoardListControl;
import com.yedam.control.ModifyBoardControl;
import com.yedam.control.RemoveControl;

//회원관련 메뉴와 컨트롤 등록.
public class MenuBoard {
	private static MenuBoard instance = new MenuBoard();
	
	private MenuBoard() {
	}
	
	public static MenuBoard getInstance() {
		return instance;
	}
	
	public Map<String, Control> menuMap(){
		Map<String, Control> menu = new HashMap<>();
		//기능등록
		menu.put("/boardList.do", new BoardListControl());
		//단건조회
		menu.put("/getBoard.do", new BoardControl());
		menu.put("/removeBoard.do", new RemoveControl());
		
		// 등록{화면, 기능}
		menu.put("/addBoardForm.do", new BoardFormControl());
		menu.put("/addBoard.do", new AddBoardControl());
		// 수정
		menu.put("/modifyBoard.do", new ModifyBoardControl());
	
		
		return menu;
		
	}
	
}

//		//기능등록
//		menu.put("/addForm.do", new AddFormControl()); //회원등록페이지;
//		menu.put("/addMember.do", new AddMemberControl()); //회원등록처리.
//		menu.put("/memberList.do", new MemberListControl());
//		menu.put("/getMember.do", new GetMemberControl()); // 회원아이디를 기준으로 상세조회.
//		menu.put("/modifyForm.do", new ModFormControl());// 수정화면 호출
//		menu.put("/modifyMember.do", new ModifyMemberControl()); //수정처리
//		menu.put("/removeMember.do", new RemoveMemberControl()); // 삭제처리
//		
//		return menu;