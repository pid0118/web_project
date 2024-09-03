package com.yedam.common;

import java.util.List;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.yedam.mapper.MemberMapper;
import com.yedam.vo.MemberVO;

public class AppTest {
	public static void main(String[] args) {
		MemberVO mvo = new MemberVO();
		mvo.setMemberId("user05");
		mvo.setMemberName("김김");
		mvo.setPassword("1111");
		mvo.setEmail("kim@email.com");
		
		
		
		SqlSessionFactory factory = DateSource.getInstance();
		SqlSession session = factory.openSession();
		MemberMapper mapper = session.getMapper(MemberMapper.class);
		
		if(mapper.insertMember(mvo) == 1) {
			session.commit();
		}
		
		mapper.insertMember(mvo);
		List<MemberVO> list = mapper.memberList();
		list.forEach(member->{
			System.out.println(member.toString());
		});
		
		
	}//end main
}
