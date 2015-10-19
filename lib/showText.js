/*
 * 사용법 아래와 같이 사용
 * showText('Devmas'); = > Devmas가 페이지 상에 나온다.
 * alert, console로 테스트 하기 불편할때가 있어 만듬
 */

var showText = function(arg){
	
	var 

	// 새로 만드는 DIV 태그 선언
	newDIV,

	// 새로 만드는 DIV 태그 안에서 결과를 보여줄 DIV 태그 선언
	showDIV;

	newDIV = document.createElement("div"); // DIV 태그를 만들고
	
	newDIV.innerHTML="<div id='showDIV'>" + arg + "</div>"; // 그 안에 받은 인자값을 넣는다.

	showDIV = document.getElementById("showDIV"); //새로만들어진 DIV를 받아온다.

	document.body.insertBefore(newDIV, showDIV); // 인자 값 출력

}