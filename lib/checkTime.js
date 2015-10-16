/*
 * 코드의 실행 시간을 측정하기위해 만든 함수 입니다.
 * 사용법 아래 예제 참고
 */

var checkTime = {

	// get start time
	start : function() {

	  	var

	  	startTime = new Date(),
		
		startMsec = startTime.getMilliseconds();

	    return startMsec;

  	},

  	// get end time
  	end : function() {

	  	var 

	  	endTime = new Date(),
		
		endMsec = endTime.getMilliseconds();

	    return endMsec;

  	},

  	// show exe time result
  	result : function(s, e) {
	  	
	  	var

	  	exeTime = (e-s) / 1000;

	  	alert(exeTime);

	  	return exeTime;

 	}
};

/* example code

var 

start,

end,

exeTime,

sum = 0,

arr = [];

// 시간 측정 시작
start = checkTime.start();

for(i=0;i<1000000;i++){
    sum = sum + i;
    arr.push(sum);
}

// 시간 측정 끝
end = checkTime.end();

checkTime.result(start, end);

*/
