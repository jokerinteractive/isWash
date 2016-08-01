$(document).ready(function () {
//код jQuery

//функция вызова таймера
function get_timer() {
	
	//Дата для обратного отсчета
	var date_new = 'Jule 31,2016 02:00'; // June 3,2012 02:00
	////////////////////////////////////
	////////////////////////////////////
	
	//Объект даты для обратного отсчета
	var date_t = new Date(date_new);
	//Объект текущей даты
	var date = new Date();
	//Вычесляем сколько миллисекунд пройдет 
	//от текущей даты до даты отсчета времени
	var timer = date_t - date;
	
	//Проверяем не нужно ли закончить отсчет
	//если дата отсчета еще не истекла, то количество
	//миллисекунд в переменной date_t будет больше чем в переменной date
	if(date_t > date) {
		
		//Вычисляем сколько осталось дней до даты отсчета.
		//Для этого количество миллисекунд до даты остчета делим
		//на количество миллисекунд в одном дне
		var ddddday = parseInt(timer/(60*60*1000*24));
		//если полученное число меньше 10 прибавляем 0
		if(ddddday < 10) {
			ddddday = '0' + ddddday;
		}
		//Приводим результат к строке
		ddddday = ddddday.toString();
			
		//Вычисляем сколько осталось часов до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одном часе и отбрасываем дни
		var hhhhhour = parseInt(timer/(60*60*1000))%24;
		//если полученное число меньше 10 прибавляем 0
		if(hhhhhour < 10) {
			hhhhhour = '0' + hhhhhour;
		}
		//Приводим результат к строке
		hhhhhour = hhhhhour.toString();
			
		//Вычисляем сколько осталось минут до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем часы
		var mmmmmin = parseInt(timer/(1000*60))%60;
		//если полученное число меньше 10 прибавляем 0
		if(mmmmmin < 10) {
			mmmmmin = '0' + mmmmmin;
		}
		//Приводим результат к строке
		mmmmmin = mmmmmin.toString();
			
		//Вычисляем сколько осталось секунд до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем минуты
		var sssssec = parseInt(timer/1000)%60;
		//если полученное число меньше 10 прибавляем 0
		if(sssssec < 10) {
			sssssec = '0' + sssssec;
		}
		//Приводим результат к строке
		sssssec = sssssec.toString();
		
		//Выводим дни
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков дней
		if(ddddday[1] == 9 && 
			hhhhhour[0] == 2 && 
			hhhhhour[1] == 3 && 
			mmmmmin[0] == 5 && 
			mmmmmin[1] == 9 && 
			sssssec[0] == 5 && 
			sssssec[1] == 9) {
			animation($("#ddddday0"),ddddday[0]);
		}
		else {
			$("#ddddday0").html(ddddday[0]);
		}
		//Для единиц дней
		if(hhhhhour[0] == 2 && 
			hhhhhour[1] == 3 && 
			mmmmmin[0] == 5 && 
			mmmmmin[1] == 9 && 
			sssssec[0] == 5 && 
			sssssec[1] == 9) {
			animation($("#ddddday1"),ddddday[1]);
		}
		else {
			$("#ddddday1").html(ddddday[1]);
		}
		//Выводим часы
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков часов
		if(hhhhhour[1] == 3 && 
			mmmmmin[0] == 5 && 
			mmmmmin[1] == 9 && 
			sssssec[0] == 5 && 
			sssssec[1] == 9) {
			animation($("#hhhhhour0"),hhhhhour[0]);
		}
		else {
			$("#hhhhhour0").html(hhhhhour[0]);
		}
		//Для единиц чассов	
		if(mmmmmin[0] == 5 && 
			mmmmmin[1] == 9 && 
			sssssec[0] == 5 && 
			sssssec[1] == 9) {
			animation($("#hhhhhour1"),hhhhhour[1]);
		}
		else {
			$("#hhhhhour1").html(hhhhhour[1]);
		}
			
		//Выводим минуты
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков минут
		if(mmmmmin[1] == 9 && 
			sssssec[0] == 5 && 
			sssssec[1] == 9) {
			animation($("#mmmmmin0"),mmmmmin[0]);
		}
		else {
			$("#mmmmmin0").html(mmmmmin[0]);
		}
		//Для единиц минут
		if(sssssec[0] == 5 && sssssec[1] == 9) {
			animation($("#mmmmmin1"),mmmmmin[1]);
		}
		else {
			$("#mmmmmin1").html(mmmmmin[1]);
		}
			
		//Выводим секунды
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков секунд
		if(sssssec[1] == 9) {
			animation($("#sssssec0"),sssssec[0]);
		}
		else {
			$("#sssssec0").html(sssssec[0]);
		}
		animation($("#sssssec1"),sssssec[1]);	
		//Переодически вызываем созданную функцию, 
		//интервал вызова одна секунда(1000 милли секунд)
		setTimeout(get_timer,1000);
	}
	else {
		$("#clock").html("<span id='stop'>Отсчет закончен!!!</span>");
	}
	
}
//Функция для красивого отображения времени.
function animation(vibor,param) {
	vibor.html(param)
		.css({'marginTop':'-20px','opacity':'0'})
		.animate({'marginTop':'0px','opacity':'1'});
}
//Вызываем функцию на исполнение
get_timer();
});