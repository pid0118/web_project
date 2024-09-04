<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>글 상세 페이지</h3>
<table class="table">
	<tr>
		<th class="table-secondary">게시글 번호</th>
		<td class="table-secondary">${board.boardNo }</td>
	</tr>
	<tr>
		<th class="table-info">글내제목</th>
		<td class="table-info"><input class="form-control" type="text" name="title"
			value="${board.title }"></td>
	</tr>
	<tr>
		<th class="table-info">게시글 내용</th>
		<td class="table-info"><input class="form-control" type="text" name="content"
			value="${board.content }"></td>
	</tr>
	<tr>
		<th class="table-warning">작성자</th>
		<td class="table-warning">${board.writer }</td>
	</tr>
	<tr>
		<th class="table-dark">작성조회수</th>
		<td class="table-dark">${board.viewCnt }</td>
	</tr>
	<tr>
		<th class="table-success">작성일자</th>
		<td class="table-success"><fmt:formatDate value="${board.creationDate }" pattern="yyyy.MM.dd HH:mm:ss" /></td>
	</tr>
	<tr>
		<!-- <td><button type="button" class="btn btn-secondary" onclick="history.back()">목록으로</button></td> history.back() 뒤로가기-->
		<td><button type="button" class="btn btn-secondary" onclick="location.href='boardList.do?page=${page}'">목록으로</button></td>
		<td colspan="2" >
			<button type="submit" class="btn btn-primary" onclick="location.href='boardList.do?page=${page}'">수정</button>
			<button class="btn btn-secondary">취소</button>
		</td>
	</tr>


</table>

<jsp:include page="../includes/footer.jsp"></jsp:include>
