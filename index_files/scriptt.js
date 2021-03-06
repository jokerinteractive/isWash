﻿$(document).ready(function () {
//код jQuery

//функция вызова таймера
function get_timer() {
	
	//Дата для обратного отсчета
	var date_new = 'Jule 31,2016 02:00'; // dateEnd; June 3,2012 02:00
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
		var dday = parseInt(timer/(60*60*1000*24));
		//если полученное число меньше 10 прибавляем 0
		if(dday < 10) {
			dday = '0' + dday;
		}
		//Приводим результат к строке
		dday = dday.toString();
			
		//Вычисляем сколько осталось часов до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одном часе и отбрасываем дни
		var hhour = parseInt(timer/(60*60*1000))%24;
		//если полученное число меньше 10 прибавляем 0
		if(hhour < 10) {
			hhour = '0' + hhour;
		}
		//Приводим результат к строке
		hhour = hhour.toString();
			
		//Вычисляем сколько осталось минут до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем часы
		var mmin = parseInt(timer/(1000*60))%60;
		//если полученное число меньше 10 прибавляем 0
		if(mmin < 10) {
			mmin = '0' + mmin;
		}
		//Приводим результат к строке
		mmin = mmin.toString();
			
		//Вычисляем сколько осталось секунд до даты отсчета.
		//Для этого переменную timer делим на количество
		//миллисекунд в одной минуте и отбрасываем минуты
		var ssec = parseInt(timer/1000)%60;
		//если полученное число меньше 10 прибавляем 0
		if(ssec < 10) {
			ssec = '0' + ssec;
		}
		//Приводим результат к строке
		ssec = ssec.toString();
		
		//Выводим дни
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков дней
		if(dday[1] == 9 && 
			hhour[0] == 2 && 
			hhour[1] == 3 && 
			mmin[0] == 5 && 
			mmin[1] == 9 && 
			ssec[0] == 5 && 
			ssec[1] == 9) {
			animation($("#dday0"),dday[0]);
		}
		else {
			$("#dday0").html(dday[0]);
		}
		//Для единиц дней
		if(hhour[0] == 2 && 
			hhour[1] == 3 && 
			mmin[0] == 5 && 
			mmin[1] == 9 && 
			ssec[0] == 5 && 
			ssec[1] == 9) {
			animation($("#dday1"),dday[1]);
		}
		else {
			$("#dday1").html(dday[1]);
		}
		//Выводим часы
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков часов
		if(hhour[1] == 3 && 
			mmin[0] == 5 && 
			mmin[1] == 9 && 
			ssec[0] == 5 && 
			ssec[1] == 9) {
			animation($("#hhour0"),hhour[0]);
		}
		else {
			$("#hhour0").html(hhour[0]);
		}
		//Для единиц чассов	
		if(mmin[0] == 5 && 
			mmin[1] == 9 && 
			ssec[0] == 5 && 
			ssec[1] == 9) {
			animation($("#hhour1"),hhour[1]);
		}
		else {
			$("#hhour1").html(hhour[1]);
		}
			
		//Выводим минуты
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков минут
		if(mmin[1] == 9 && 
			ssec[0] == 5 && 
			ssec[1] == 9) {
			animation($("#mmin0"),mmin[0]);
		}
		else {
			$("#mmin0").html(mmin[0]);
		}
		//Для единиц минут
		if(ssec[0] == 5 && ssec[1] == 9) {
			animation($("#mmin1"),mmin[1]);
		}
		else {
			$("#mmin1").html(mmin[1]);
		}
			
		//Выводим секунды
		//Проверяем какие предыдущие цифры времени должны вывестись на экран
		//Для десятков секунд
		if(ssec[1] == 9) {
			animation($("#ssec0"),ssec[0]);
		}
		else {
			$("#ssec0").html(ssec[0]);
		}
		animation($("#ssec1"),ssec[1]);	
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