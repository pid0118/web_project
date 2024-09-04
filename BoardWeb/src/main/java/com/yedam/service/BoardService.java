package com.yedam.service;

import java.util.List;

import com.yedam.vo.BoardVO;

public interface BoardService {
	List<BoardVO> boardList(int page); //목록
	boolean addBoard(BoardVO board); //글 추가
	boolean modifyBoard(BoardVO board); // 글 수정
	boolean removeBoard(int boardNo); // 글 삭제
	BoardVO getBoard(int boardNo); // 단건조회.
	
	int getTotalCnt();
	
	
}	
