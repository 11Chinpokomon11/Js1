document.addEventListener('DOMContentLoaded', function () {

    const inputDate = (message) => {
    	let input = prompt(message);
    	if (input === '') return new Date();
  	const [day, month, year] = input.split('.');
  	return new Date(year, +month - 1, day);
};


    function GetDate(date1, date2)
    {
        
        if (date1 > date2) [date1, date2] = [date2, date1];
	const totalDays = Math.floor(Math.abs(date2 - date1) / (1000 * 3600 * 24));
        let years = 0,
    	months = 0,
    	days = 0;

  	while (date1 <= date2) {
    	years++;
    	date1.setFullYear(date1.getFullYear() + 1);
  	}
 	years--;
  	date1.setFullYear(date1.getFullYear() - 1);

 	while (date1 <= date2) {
    	months++;
    	date1.setMonth(date1.getMonth() + 1);
  	}
  	months--;
  	date1.setMonth(date1.getMonth() - 1);

  	while (date1 <= date2) {
    	days++;
    	date1.setDate(date1.getDate() + 1);
  	}
  	days--;
        let typeDate = prompt("Введите формат вывода даты: годы, месяцы, недели, дни");
        switch (typeDate) {
            case 'годы':
               	alert(`${years} лет ${months} месяцев ${Math.floor(days / 7)} недель ${days % 7} дней`);
                break;
            case 'месяцы':
                alert(`${months + years * 12} месяцев ${Math.floor(days / 7)} недель ${days % 7} дней`);
                break;
            case 'недели':
                alert(` ${Math.floor(totalDays / 7)} недель ${totalDays % 7} дней`);
                break;
            case 'дни':
                alert(` ${totalDays} дней`);
        }
    }


    let start = inputDate('Введите первую дату в формате дд.мм.гггг: (Если она текущая оставьте пустую строку)');
    let end = inputDate('Введите конечную дату в формате дд.мм.гггг:');

    GetDate(start, end);

});