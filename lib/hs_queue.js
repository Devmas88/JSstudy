/*
 * 사용법 아래와 같이 사용
 * 
 */
// 전역 배열 만들기
arr = [];

var hs_queue = {

	push : function(a) {
		
		arr.push(a);

		return arr;

  	},

  	pop : function() {

  		arr.shift();

  		return arr;

  	},

  	claer : function() {
  		arr = [];
  	}

}