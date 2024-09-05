package com.yedam.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DateSource;
import com.yedam.mapper.MemberMapper;
import com.yedam.vo.MemberVO;

public class MemberServiceImpl implements MemberService {

	SqlSession sqlSession = DateSource.getInstance().openSession(true);
	MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);

	@Override
	public List<MemberVO> getMembers() {
		return mapper.memberList();

	}

	@Override
	public boolean addMember(MemberVO member) {
		if (mapper.selectMember(member.getMemberId()) != null) {
			return false; // 이미 존재하는 아이디는 추가 불가능
		}
		return mapper.insertMember(member) == 1;
	}

	@Override
	public boolean removeMember(String memberId) {
		return mapper.deleteMember(memberId) == 1;
	}

	@Override
	public boolean modifyMember(MemberVO member) {
		return mapper.updateMember(member) == 1;
	}

	@Override
	public MemberVO getMember(String memberId) {
		return mapper.selectMember(memberId);
	}
	
	@Override
	public MemberVO loginCheck(String id, String pw) {
		// 로그인 확인.
		return mapper.loginMember(id, pw);
	}
	
}
