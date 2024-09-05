<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>회원의 정보수정화면</h3>

<form action="modifyBoard.do">
	<input type="hidden" name="id" value="${logId }">
	<table class="table">
		<tr>
			<th>글 재목</th>
			<td><input class="form-control" type="text" name="title"
				value="${title}"></td>
		</tr>
		<tr>
			<th>게시글 내용</th>
			<td><input class="form-control" type="text" name="content"
				value="${content}"></td>
		</tr>
		<tr>
			<th>작성자</th>
			<td>${logId }</td>
		</tr>
		<tr>
			<th>작성일자</th>
			<td>creationDate</td>
		</tr>
		<tr>
			<th>작성조회수</th>
			<td>${viewCnt }</td>
		</tr>
		<tr>
			<th>이미지</th>
			<td>${image }</td>
		</tr>
		<tr>
			<td colspan="2" align="center">
				<button type="submit" class="btn btn-primary">저장</button>
				<button class="btn btn-secondary">취소</button>
			</td>
		</tr>
	</table>
</form>
<jsp:include page="../includes/footer.jsp"></jsp:include>