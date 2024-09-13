<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() { //차트생성하는 함수.
		var dataAry = [['작성자', '작성글 숫자']];
    	  // Ajax 호출
    	  fetch('chart.do')
    	  	.then(resolve => resolve.json())
    	  	.then(result =>{
    	  		// [['작업', '시간'], ['잠', 8], [], []]
				 result.forEach(member => {
					dataAry.push([member.memberName, member.cnt]);					 
				 })    	  		
    	  		 var data = google.visualization.arrayToDataTable(dataAry);
    	         var options = {
    	           				title: '게시글 작성자별 개시글수'
    	         				};
					
   	 	         var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    	         chart.draw(data, options);
    	  	})
    	  	.catch(err => console.log(err));
       
    	  }
    </script>
  </head>
  <body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>
  </body>
</html>