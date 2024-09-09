package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.apache.tomcat.jdbc.pool.DataSource;

import com.yedam.common.DateSource;
import com.yedam.mapper.ReplyMapper;
import com.yedam.vo.ReplyVO;

public class ReplyServiceImpl implements ReplyService {
	
	SqlSession sqlSession = DateSource.getInstance().openSession(true);
	ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class);
	
	@Override
	public List<ReplyVO> replyList(int bno) {
		// TODO Auto-generated method stub
		return mapper.selectList(bno);
	}
	
	@Override
	public boolean removeReply(int rno) {
		return mapper.deleteReply(rno ) == 1;
	}
	
	@Override
	public boolean removeReplys(String[] array) {
		// TODO Auto-generated method stub
		return mapper.deleteReplys(array) > 0;
	}
	
	@Override
	public boolean addReply(ReplyVO rvo) {
		int rno = mapper.selectKey();
		rvo.setReplyNo(rno);
		return mapper.insertReply(rvo) == 1;	}
	
}
