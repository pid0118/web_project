/**
 * replyBoard.js
 * replyService에 정의된 메소드를 통해서 기능 실행.
 */
// DOM 요소를 다 읽어들인다음에 코드실행.
document.addEventListener("DOMContentLoaded", function(e) {
	/*================
	 이벤트(댓글등록)
	//댓글등록
	================*/
	document.querySelector('#addReply').addEventListener('click', addReplyFnc);

	//페이지 링크출력
	document.querySelectorAll('ul.pagination a').forEach(aTag => {
		aTag.addEventListener('click', showReplyListFnc);
	})
		pagination = document.querySelector('ul.pagination');
	//댓글과 페이지리스트 보여주기,
	showReplyListAndPagingList();

}) // end of DOMContentLoaded.


let page = 1; // 페이지 변경될떄마다 사용해야함;


/*
========================
 댓글정보 -> li 생성하는 함수.
========================
*/

function makeLi(reply = {}) {
	let cloned = document.querySelector('#template').cloneNode(true);
	cloned.style.display = 'block';
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.querySelector('span').innerHTML = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	cloned.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	cloned.querySelector('button').addEventListener('click', deleteLiFnc);

	console.log(cloned);
	return cloned;
}

/*
=====================
 함수:deleteLiFnc
 기능:버튼이 포함된 row 삭제. ajax 사용
======================
*/

function deleteLiFnc(e) {
	let rno = e.target.parentElement.parentElement.dataset.rno;
	svc.removeReply(rno,
		function(result) {
			if (result.retCode == 'OK') {
				alert('삭제성공');
				//e.target.parentElement.parentElement.remove();
				showReplyListAndPagingList()
			} else {
				alert('삭제중 예외발생')
			}
		},
		function(err) {
			console.log(err);
		}
	);
}

/*
================
 댓글등록 이벤트핸들러.
================
*/
function addReplyFnc(e) {
	//bno, replyer, reply
	let reply = document.querySelector('#reply').value

	let param = { bno: bno, replyer: writer, reply: reply }

	svc.addReply(param,
		function(result) {
			if (result.retCode == 'OK') {
				console.log(result.retVal.replyNo);
				let newReply = result.retVal;
				Swal.fire("SweetAlert2 is working!");
				document.querySelector('div.content ul').appendChild(makeLi(newReply));
				showReplyListAndPagingList()
			} else {
				alert('삭제중 예외발생')
			}
		},
		function(err) {
			console.log(err);
		}

	);
}

/*========================
  링크클릭시 댓글목록 새로출력
  함수: showReplyListFnc
========================*/

function showReplyListFnc(e) {

	//기존에 출력 리스트 지워주고.
	document.querySelectorAll('div.content li').forEach((li, indx) => {
		if (indx > 2) {
			li.remove();
		}
	})

	page = e.target.dataset.page; // 페이지번호
	svc.replyList({ bno, page }, //원본글번호
		function(result) {
			console.log(result)
			result.forEach(reply => {
				document.querySelector('div.content ul').appendChild(makeLi(reply));
			});
			showPagingListFnc(); // 목록을 새로 그려주면 페이지리스트로 새로 생성
		},
		function(err) {
			console.log(err);
		});
}

/*
=============================
 댓글갯수를 활용해서  페이지리스트 생성
 함수 : showPagingListFnc
=============================
*/

let pagination = document.querySelector('ul.pagination')

function showPagingListFnc() {
	svc.replyRagingCount(bno, // 게시글번호
		makePagingList, // 성공 시 실행 함수(콜백 함수)
		function(err) {
			console.log(err);
		}
	)
}

// 정상처리 실행할 콜백함수
function makePagingList(result) {
	pagination.innerHTML = '';

	let totalCnt = result.totalCount;
	//페이지목록 만들기.
	let startPage, endPage, realEnd; //첫페이지 ~ 마지막페이지
	let prev, next; // 이전페이지, 이후페이지

	endPage = Math.ceil(page / 5) * 5;
	startPage = endPage - 4;
	realEnd = Math.ceil(totalCnt / 5);

	endPage = endPage > realEnd ? realEnd : endPage;

	prev = startPage > 1;
	next = endPage < realEnd;

	// 이전 페이지 생성
	let li = document.createElement('li');
	li.className = 'page-item';
	let aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Previous';
	li.appendChild(aTag);
	if (prev) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', startPage - 1);
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li);

	// li 생성. 페이지 범위에 들어갈...
	for (let p = startPage; p <= endPage; p++) {
		let li = document.createElement('li');
		li.className = 'page-item';
		let aTag = document.createElement('a');
		aTag.className = 'page-link';
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', p);
		aTag.innerHTML = p;
		li.appendChild(aTag);
		if (p == page) {
			li.classList.add('active');
			li.setAttribute('aria-current', 'page');
		}

		pagination.appendChild(li);

		// 이벤트 등록
		document.querySelectorAll('ul.pagination a').forEach(aTag => {
			aTag.addEventListener('click', showReplyListFnc);
		})
	}

	// 이후 페이지 생성
	li = document.createElement('li');
	li.className = 'page-item';
	aTag = document.createElement('a');
	aTag.className = 'page-link';
	aTag.innerHTML = 'Next';
	li.appendChild(aTag);
	if (next) {
		aTag.setAttribute('href', '#');
		aTag.setAttribute('data-page', endPage + 1);
	} else {
		li.classList.add('disabled');
	}
	pagination.appendChild(li);
	
	document.querySelectorAll('ul.pagination a').forEach(aTag => {
	aTag.addEventListener('click', showReplyListFnc);
})

}
showReplyListAndPagingList()

function showReplyListAndPagingList(){
	svc.replyList({ bno, page}, //원본글 번호
	function(result){
		//기존목록을 삭제하고 새로 그려주기.
		document.querySelectorAll('div.content li').forEach((item, indx) => {
			if(indx > 2){
				item.remove();
			}
		})
		// 목록 출력
		result.forEach(reply => {
			document.querySelector('div.content ul').appendChild(makeLi(reply))
		});
		showPagingListFnc();
	}, // 성공처리됬을 때 실행함수.
	function(err){
		console.log(err);
	} // 실패했을 때 실행함수.
);
}
