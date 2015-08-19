/*
 * 사용법 아래와 같이 사용
 * 오늘로 부터 3일 후 년 월 일 요일 나타남
 * alert(afterDayShow(3)); 
 */

var afterDayShow = function(afterDay) {

    var
    
    // 오늘 날짜
    today = new Date(),

    // afterTime을 보며주기위한 날짜 재설정
    afterDateCal = new Date(today.getTime() + afterDay * 24 * 60 * 60 * 1000),

    // 요일 정보
    afterWeek = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'),

    afterGetDay = afterWeek[afterDateCal.getDay()];

    afterDate = afterDateCal.getFullYear() + '년 ' + ((afterDateCal.getMonth() + 1) < 10 ? '0' + (afterDateCal.getMonth() + 1) : (afterDateCal.getMonth() + 1)) + '월 ' + (afterDateCal.getDate() < 10 ? '0' + afterDateCal.getDate() : afterDateCal.getDate()) + '일 ' + afterGetDay

    return afterDate;
}