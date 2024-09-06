<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<h3>글 상세 페이지</h3>
<p>searchCondition: ${sc }, keyword: ${kw }</p>

<table class="table">
	<tr>
		<th class="table-secondary">게시글 번호</th>
		<td class="table-secondary">${board.boardNo }</td>
	</tr>
	<tr>
		<th class="table-success">글내제목</th>
		<td ><input class="form-control" type="text" name="title"
			value="${board.title }"></td>
	</tr>
	<tr>
		<th class="table-success">게시글 내용</th>
		<td ><input class="form-control" type="text" name="content"
			value="${board.content }"></td>
	</tr>
	<tr>
		<th class="table-success">작성자</th>
		<td >${board.writer }</td>
	</tr>
	<tr>
		<th class="table-success">작성일자</th>
		<td ><fmt:formatDate value="${board.creationDate }" pattern="yyyy.MM.dd HH:mm:ss" /></td>
	</tr>
	<tr>
		<th class="table-success">작성조회수</th>
		<td >${board.viewCnt }</td>
	</tr>
	<tr>
		<th class="table-success">이미지</th>
		<td colspan="2" rowspan="3" >
		<c:if test="${!empty board.image }">
		<img width="150px" src="images/${board.image }" >
		</c:if>
		</td>
	</tr>
	
		<!-- <td><button type="button" class="btn btn-secondary" onclick="history.back()">목록으로</button></td> history.back() 뒤로가기-->


</table>

<form action="removeBoard.do" name="actForm">
	<input type="hidden" name="keyword" value="${kw }">
	<input type="hidden" name="searchCondition" value="${sc }">
	<input type="hidden" name="page" value="${page }">
	<input type="hidden" name="bno" value="${board.boardNo }">
</form>modifyBoard.do
<div>
		<a class="btn btn-secondary" onclick="form_submit('boardList.do')">목록으로</a>
		<a class="btn btn-warning" onclick="form_submit('modifyBoard.do')">수정</a>
		<a class="btn btn-danger" onclick="form_submit('removeBoard.do')">삭제</a>
		<c:if test="${!empty message }">
			<span style="color: red">${message }</span>
		</c:if>

</div>

<script>
	// 매개값으로 이동할 컨트롤을 받아서 파라미터를 전달.
	function form_submit(uri){
		document.forms.actForm.action = uri;
		document.forms.actForm.submit();
		
	}
</script>


