/**
 *   replyBoard.js
 * 	 replyService에 정의된 메소드를 통해서 기능 실행 
 */

/***********************
 *  이벤트 (댓글등록)
 **********************/
document.querySelector('#addReply').addEventListener('click', addReplyFnc);

/***********************
 * 댓글목록 그리기
 **********************/

svc.replyList(bno,
	 function(result){
	  {console.log(result)};
	  result.forEach(reply => {
		 document.querySelector('div.content ul').appendChild(makeLi(reply));
	  });
	},		//성공처리 됐을 떄 실행함수. 
	  function(err) {
		  console.log(err);
	   } 	//실패했을때  실행함수.
 
 );
 /*************************
 *  댓글정보 -> li 생성하는 함수.
 *************************/
function makeLi(reply = {}){
	let cloned = document.querySelector('#template').cloneNode(true);  // 복제.
	cloned.style.display = 'block'; // display속성도 복사되기 떄문에 block로 변경
	cloned.setAttribute('data-rno', reply.replyNo);
	cloned.querySelector('span').innerHTML = reply.replyNo;
	cloned.querySelector('span:nth-of-type(2)').innerHTML = reply.reply;
	cloned.querySelector('span:nth-of-type(3)').innerHTML = reply.replyer;
	cloned.querySelector('button').addEventListener ('click', deleteLiFnc);
	console.log(cloned);
	return cloned;
}
 
 /***********************
 * 함수: deleteLind
 * 기능: 버튼이 포함된 row 삭제 (ajax)
 **********************/
function deleteLiFnc(e) {
	//SweetAlert code.
	Swal.fire({
		title: "Are you sure?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: true,
		confirmButtonColor: "#3085d6",
		cancelButtonColor: "#d33",
		confirmButtonText: "Yes, delete it!"
	}).then((result) => {
		if (result.isConfirmed) {
			// 삭제처리.
			let rno = e.target.parentElement.parentElement.dataset.rno;
			svc.removeReply(rno,
				function(result) {
					if (result.retCode == 'OK') {
						Swal.fire({
							title: "굳 성공",
							text: "Your file has been deleted.",
							icon: "seccess"
						})
						e.target.parentElement.parentElement.remove();
					} else {
						Swal.fire({
							title: "Fail",
							text: "Your file has been deleted.",
							icon: "error"
						})
					}
				},
				function(err) {
					console.log(err);
				}
			);


			;
		}
	});


}

/***********************
 * 댓글등록 이벤트헨들러
 **********************/

 function addReplyFnc(e){
	 // bno, replyer, reply
	 let reply = document.querySelector('#reply').value;
	 //로그인정보, 댓글정보가 있는지 확인하고 처리를 진행.
	  if(!writer || !reply){
		 alert('필수입력값 입력')
		 return;
	 }	 
	 //입력값 정보
	 let param = {bno: bno,
	 			  replyer: writer,
	 			  reply: reply
	}
	 svc.addReply(param,
	 function(result){
		if(result.retCode == 'OK'){
			let newReply = result.retVal; // 신규로입력된 댓글정보.
			Swal.fire("등록성공");
			//alert('등록성공');
			document.querySelector('div.content ul').appendChild(makeLi(newReply));
		}else{
			alert('등록처리중 오류발생스~');			
		}
		//입력값 비워주기
		document.querySelector('#reply').value = '';
	},
	function(err){
		console.log(err);
	}
	);
	
 }