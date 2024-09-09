package com.yedam.common;

import org.apache.ibatis.session.SqlSession;

import com.yedam.mapper.ReplyMapper;

public class AppTest {

	public static void main(String[] args) {
		SqlSession sqlSession = DateSource.getInstance().openSession(true);
		ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
		
		String[] arg = {"22", "24", "25", "26", "27" };
		
		mapper.deleteReplys(arg);
	}

}
