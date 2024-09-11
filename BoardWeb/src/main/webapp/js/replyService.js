/**
 * 
 */

/*
======================================
	날짜포맷 : yyyy-MM-dd HH:mm:ss
======================================
*/
Date.prototype.dateFormet = function() {
	let yyyy = this.getFullYear();
	let MM = ('0' + (this.getMonth() + 1)).slice(-2);
	let dd = ('0' + this.getDate()).slice(-2);

	let hh = ('0' + this.getHours()).slice(-2);
	let mm = ('0' + this.getMinutes()).slice(-2);
	let ss = ('0' + this.getSeconds()).slice(-2);

	return yyyy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm + ':' + ss;

}


/*
======================================
	ReplyVO 값을 tr 생성해주는 함수.
======================================
*/

let fields = ['replyNo', 'reply', 'replyer', 'replyDate'];

function makeRow(reply = {}) {
	let tr = document.createElement('tr')
	tr.setAttribute('data-rno', reply.replyNo);

	// 체크박스 생성
	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');

	let td = document.createElement('td');
	td.appendChild(checkbox);
	tr.appendChild(td);

	fields.forEach(field => {
		let td = document.createElement('td');
		if (field == 'replyDate') {
			let today = new Date(reply[field]); // 날짜문자 -> 날짜객체.dateFormet()출력
			td.innerHTML = today.dateFormet();
		} else {
			td.innerHTML = reply[field];
		}
		tr.appendChild(td);
	});

	// 삭제 버튼
	let deleteBtn = document.createElement('button');
	deleteBtn.innerHTML = '삭제';
	deleteBtn.addEventListener('click', deleteRowFnc);
	td = document.createElement('td');
	td.appendChild(deleteBtn);
	tr.appendChild(td);

	return tr;
}

//서비스, 메소드를 통해서 ajax 기능을 실행
const svc = {
	replyList: function(param = { bno: 1, page: 1 }, successCallBack, errorCallBack) {
		fetch('replyList.do?bno=' + param.bno + '&page=' + param.page)
			.then(resolve => resolve.json())
			.then(successCallBack)
			.catch(errorCallBack)
	},
	removeReply(rno = 1, successCallBack, errorCallBack) {
		fetch('removeReply.do?rno=' + rno)
			.then(resolve => resolve.json())
			.then(successCallBack)
			.catch(errorCallBack)
	},
	addReply(param = { bno, reply, replyer }, successCallBack, errorCallBack) {
		fetch('addReply.do', {
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: 'bno=' + param.bno + '&reply=' + param.reply + '&replyer=' + param.replyer
		})
			.then(resolve => resolve.json())
			.then(successCallBack)
			.catch(errorCallBack)
	},
	replyRagingCount(bno = 1, successCallBack, errorCallBack) {
		fetch('replyCount.do?bno=' + bno)
			.then(resolve => resolve.json())
			.then(successCallBack)
			.catch(errorCallBack)
	}

}





