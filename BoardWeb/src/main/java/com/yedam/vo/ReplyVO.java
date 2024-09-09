package com.yedam.vo;

import java.util.Date;

import lombok.Data;


@Data
public class ReplyVO {
	private int replyNo;
	private String replyer;
	private String reply;
	private int boardNo;
	private Date replyDate;
}
