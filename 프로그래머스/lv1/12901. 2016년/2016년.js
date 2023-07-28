function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var date = new Date(2016, (a - 1), b);
    const dayOfWeek = week[date.getDay()];

    return dayOfWeek;
}