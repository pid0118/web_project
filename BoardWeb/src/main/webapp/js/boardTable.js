/**
 * boardTable.js
 */

const table = new DataTable('#example', {
	ajax: 'replyTable.do?bno=' + bno,
	columnDefs: [
		{
			render: (data, type, row) => '<button onclick="deleteRow(' + row.replyNo + ')">삭제</button>',
			targets: 4
		},
		//{ visible: false, targets: [3] }
	],
	columns: [
		{ data: 'replyNo' },
		{ data: 'reply' },
		{ data: 'replyer' },
		{ data: 'replyDate' }
	],
	lengthMenu: [
		[5, 10, 20, -1],
		[5, 10, 20, 'All']
	],
	order: {
		idx: 0,
		dir: 'desc'
	}

});

function deleteRow(e, rno) {
	//console.log(e.target.parentElement.parentElement.firstChild.innerHTML); //  button 상위요소.첫번쨰요소 html
	//delNum = e.target.parentElement.parentElement.firstChild.innerHTML;
	if(e.target.parentElement.parentElement.classList.contains('selected')){
	e.stopPropagation(); //상위요소로의 이밴트 차단.
	}
	delNum = rno;
	//Ajax
	fetch('removeReply.do?rno=' + delNum)
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('삭제완료!');
				table.row('.selected').remove().draw(false); // detatable 함수
			} else {
				alert('예외 발생!');
			}
		})
		.catch(err => console.log(err));

}

let delNum = '';
//삭제기능구현
document.querySelector('#delReply').addEventListener('click', function() {
	// Ajax 호출.
	if (!delNum) {
		alert('삭제할 댓글을 선택하세요.');
		return;
	}
	//Ajax
	fetch('removeReply.do?rno=' + delNum)
		.then(resolve => resolve.json())
		.then(result => {
			if (result.retCode == 'OK') {
				alert('삭제완료!');
				table.row('.selected').remove().draw(false); // detatable 함수
			} else {
				alert('예외 발생!');
			}
		})
		.catch(err => console.log(err));
});
//row 선택.
table.on('click', 'tbody tr', (e) => {
	delNum = e.currentTarget.firstChild.innerHTML;

	let classList = e.currentTarget.classList;

	if (classList.contains('selected')) {
		classList.remove('selected');
	}
	else {
		table.rows('.selected').nodes().each((row) => row.classList.remove('selected'));
		classList.add('selected');
	}
});

//addreply에 클릭
document.querySelector('#addReply').addEventListener('click', addNewRow);
// replyNo : 111, reply: test, replyer: user01, replyDate: 2023.11.11
//화면에 데이터 추가하는 함수.
function addNewRow() {
	//로그인, 댓글 정보 없으면 종료
	let reply = document.querySelector('#reply').value;
	if (!writer || !reply) {
		alert('필수항목입력하세요')
		return;
	}


	fetch('addReply.do', {
		method: 'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: 'bno=' + bno + '&reply=' + reply + '&replyer=' + writer
	})
		.then(resolve => resolve.json())
		.then(result => {
			//정상처리 or 예외처리
			let newValue = result.retVal
			console.log(newValue);
			if (result.retCode == 'OK') {
				table.row
					.add({
						replyNo: newValue.replyNo,
						reply: newValue.reply,
						replyer: newValue.replyer,
						replyDate: newValue.replyDate
					})
					.draw(false);
			} else {
				alert('예외 발생!!');
			}
		})
		.catch(err => console.log(err));
} //end of addNewRow().