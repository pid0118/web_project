<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<style>
	div.reply div {
		margin: auto;
	}
	div.reply ul{
		list.style-type: nene;
	}
	div.reply span{
		display: inline-block;
	}
</style>

<link rel="stylesheet" href="//cdn.datatables.net/2.1.5/css/dataTables.dataTables.min.css">
<script src="js/jquery-3.7.1.js"></script>
<script src="//cdn.datatables.net/2.1.5/js/dataTables.min.js"></script>

<script>
	const bno = '${board.boardNo }'; //원글번호.
	const writer = '${logid}'; //로그인 정보.
	
</script>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="js/replyService.js"></script>
<script src="js/replyBoard.js"></script>

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

<!-- 댓글관련 -->
<div class="container reply">
	<!-- 댓글등록 -->
	<div class="header">
		<input type="text" id="reply" class="col-sm-8">
		<button id="addReply" class="btn btn-primary">댓글등록</button>
		<button id="delReply" class="btn btn-danger">댓글삭제</button>
	</div>
	
	<!-- 댓글목록 -->
	<!-- 댓글페이징 데이터테이블활용-->
		
		<table id="example" class="display" style="width: 100%">
			<thead>
				<tr>
					<th>댓글번호</th>
					<th>내용</th>
					<th>작성자</th>
					<th>작성일시</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>댓글번호</th>
					<th>내용</th>
					<th>작성자</th>
					<th>작성일시</th>
				</tr>
			</tfoot>
		</table>
		<!-- 댓글페이징 -->

	</div>


</div>

<script>
	// 매개값으로 이동할 컨트롤을 받아서 파라미터를 전달.
	function form_submit(uri) {
		document.forms.actForm.action = uri;
		document.forms.actForm.submit();

	}
</script>


<script src="js/boardTable.js"></script>