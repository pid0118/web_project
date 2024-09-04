<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<jsp:include page="../includes/header.jsp"></jsp:include>
<h3>게시글 목록</h3>

<table class="table">
	<thead>
		<tr>
			<th>글번호</th>
			<th>제목</th>
			<th>작성자</th>
			<th>작성일시</th>
		</tr>
	</thead>
	<tbody>
		<!-- for (BoardVO board : list) {  -->
		<c:forEach var="board" items="${list }">
			<tr>
				<td><c:out value="${board.boardNo }" /></td>
				<td><a href="getBoard.do?page=${paging.page }&bno=${board.boardNo }">${board.title }</a></td>
				<td>${board.writer }</td>
				<td><fmt:formatDate value="${board.creationDate }"
						pattern="yyyy.MM.dd HH:mm:ss" /></td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<p>${paging }</p>
<!-- 페이징 -->
<nav aria-label="...">
	<ul class="pagination">
		<li class="page-item ${paging.prev ? '' : 'disabled'} ">
			<a class="page-link" href="boardList.do?page=${paging.startPage -1 }">Previous</a>
		</li>
		
		<c:forEach var="pg" begin="${paging.startPage }" end="${paging.endPage }">
			<c:choose>
				<c:when test="${paging.page == pg }">
					<li class="page-item active" aria-current="page"><a
						class="page-link" href="boardList.do?page=${pg }">${pg }</a></li>
				</c:when>
				<c:otherwise>
					<li class="page-item"><a class="page-link"
						href="boardList.do?page=${pg }">${pg }</a></li>
				</c:otherwise>
			</c:choose>
		</c:forEach>

		<li class="page-item ${paging.next ? '' : 'disabled' }">
		<a class="page-link" href="boardList.do?page=${paging.endPage +1 }">Next</a></li>
	</ul>
</nav>








<!--<p>${'문자열, 숫자, boolean null'}</p>
<p>${3+5 > 10 ? '참입니다' : '거짓입니다' }</p>
<p>${msg }</p>
<p>${list }</p>String name = "hong";";
%>

<c:set var="name" value="Hongkildong"></c:set>
<c:out value="%{name }"></c:out>
<c:set var="age" value="20"></c:set>
<c:out value="${age >= 20 ? '성인' : '미성년' }"></c:out>

<c:if test="${name == 'Hongkildong' }">
	<p>틀렸습니다.</p>
</c:if>-->

<jsp:include page="../includes/footer.jsp"></jsp:include>