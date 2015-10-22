/*
 * 사용법 아래와 같이 사용
 * 
 */
// 전역 배열 만들기
arr = [];

var hs_stack = {

    push : function(a) {
    		
      arr.push(a);

      return arr;

    },

    pop : function() {

    	arr.pop();

    	return arr;

    },

    claer : function() {
    	
      arr = [];

      return arr;
    
    }

}