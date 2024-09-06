<%@page import="com.yedam.vo.MemberVO"%>
<%@page import="java.util.List"%>
<%@page import="com.yedam.service.MemberServiceImpl"%>
<%@page import="com.yedam.service.MemberService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원목록 출력하는 기능</title>
</head>
<body>
	<%
	// jsp -> 서블릿으로 변환되어서 실행
	// memberList.jsp -> memberList_jsp.java -> memberList_jsp.class 실행.
	MemberService svc = new MemberServiceImpl();
	List<MemberVO> list = svc.getMembers(); //(List<MemberVO>) request.getAttribute("memberList");//
	%>

	<h3>회원목록</h3>
	<table class="table">
		<thead>
			<tr>
				<th>회원아이디</th>
				<th>회원이름</th>
				<th>이메일</th>
				<th>권한</th>
			</tr>
		</thead>
		<tbody>
		<%for(MemberVO member : list){ %>
			<tr>
				<td><a href="getMember.do?id=<%=member.getMemberId() %>"><%=member.getMemberId()%></a></td>
				<td><%=member.getMemberName() %></td>
				<td><%=member.getEmail() %></td>
				<td><%=member.getAuthority() %></td>
			</tr>
			<%} %>
		</tbody>
	</table>



</body>
</html>

