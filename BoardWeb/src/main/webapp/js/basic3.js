/**
 * 
 */
	//추가버튼에 이벤트 달기
        let addBtn = document.querySelector('#addBtn');
        
        addBtn.addEventListener('click', function(e){
			
		
        //클릭이벤트가 발생하면 해야할 일
        //tr 요소를 생성해서 id. name,  point의 각 요소의 값을 td에 담아서 append.
        //만들어진 tr을 tbody에 append.
        let tr = document.createElement('tr');
        let obj = {
			id: document.querySelector('#id').value,
			name: document.querySelector('#name').value,
			point: document.querySelector('#point').value
		}
		
		for(let prop in obj){
			let td = document.createElement('td');
			td.innerHTML = obj[prop];
			tr.appendChild(td);
		}
		
		//tbody의 하위요소 추가
		document.querySelector('#list').appendChild(tr);
		
		//입력값 초기화
		document.querySelector('#id').value = '';
		document.querySelector('#name').value = '';
		document.querySelector('#point').value = '';
});