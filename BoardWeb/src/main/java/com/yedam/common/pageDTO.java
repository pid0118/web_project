package com.yedam.common;

import lombok.Data;

// 페이징 계산 위한 클레스
@Data
public class pageDTO {
	// 현재페이지정보. 		1 .. 3 .. 10
	// 이전, 이후 정보.
	int page;
	int startPage, endPage;
	boolean prev, next;
	
	public pageDTO(int page, int totalCnt) { // page: 3, totalCnt: 76건. 16page.
		this.page = page;
		this.endPage = (int)Math.ceil(page / 10.0) * 10; //마지막페이지 설정
		this.startPage = this.endPage - 9; //사작페이지 설정
		
		int realEnd = (int)Math.ceil(totalCnt/5.0);
		this.endPage = this.endPage > realEnd ? realEnd : this.endPage;
		
		// 이전, 이후 여부
		prev = this.startPage > 1; // 1, 11, 21
		next = this.endPage < realEnd ? true : false;
		
	}
	
}
