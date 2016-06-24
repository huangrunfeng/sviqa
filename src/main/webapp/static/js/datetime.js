function getNowFormatDate(intervalTime) {
	var n = intervalTime;
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    date.setDate(date.getDate()-n);
    var strMonth = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour = date.getHours();
    var strMinute = date.getMinutes();
    var strSecond = date.getSeconds();
    if (strMonth >= 1 && strMonth <= 9) {
    	strMonth = "0" + strMonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHour >= 0 && strHour <= 9) {
    	strHour = "0" + strHour;
    }
    if (strMinute >= 0 && strMinute <= 9) {
    	strMinute = "0" + strMinute;
    }
    if (strSecond >= 0 && strSecond <= 9) {
    	strSecond = "0" + strSecond;
    }
    var currentdate = date.getFullYear() + seperator1 + strMonth + seperator1 + strDate
            + " " + strHour + seperator2 + strMinute
            + seperator2 + strSecond;
    return currentdate;
}

function unixToDate(unixTime,timeZone) {
    if (typeof (timeZone) == 'number'){
        unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
    }
    var date = new Date(unixTime);
    var seperator1 = "-";
    var seperator2 = ":";
    var strMonth = date.getMonth() + 1;
    var strDate = date.getDate();
    var strHour = date.getHours();
    var strMinute = date.getMinutes();
    var strSecond = date.getSeconds();
    if (strMonth >= 1 && strMonth <= 9) {
    	strMonth = "0" + strMonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHour >= 0 && strHour <= 9) {
    	strHour = "0" + strHour;
    }
    if (strMinute >= 0 && strMinute <= 9) {
    	strMinute = "0" + strMinute;
    }
    if (strSecond >= 0 && strSecond <= 9) {
    	strSecond = "0" + strSecond;
    }
    var currentdate = date.getFullYear() + seperator1 + strMonth + seperator1 + strDate
            + " " + strHour + seperator2 + strMinute
            + seperator2 + strSecond;
    return currentdate;
}