/*
 * 코드이 실행 시간을 측정하기위해 만든 함수 입니다.
 * 사용법 아래 예제 참고
 */

var checkTime = {

  start: function() {

  	var 

  	startTime = new Date(),
	
	startMsec = startTime.getMilliseconds();

    return startMsec;

  },

  end: function() {

  	var 

  	endTime = new Date(),
	
	endMsec = endTime.getMilliseconds();

    return endMsec;

  }

};

/* example code

var 

startTime,

endTime,

exeTime,

sum,

arr;

sum = 0;

arr = [];

// 시간 측정 시작
startTime = checkTime.start(),

for(i=0;i<1000000;i++){
    sum = sum + i;
    arr.push(sum)
}

// 시간 측정 끝
endTime = checkTime.end();

// 결과
exeTime = (endTime-startTime) / 1000;

alert(exeTime);

*/