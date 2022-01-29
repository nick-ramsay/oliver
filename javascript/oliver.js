let oliverBirthdateTimestamp = new Date(2021, 9, 28);
let currentTimestamp = new Date();

let oliverAgeUnix = currentTimestamp.getTime() - oliverBirthdateTimestamp.getTime();
let oliverAgeDayCount = Math.round((oliverAgeUnix / (1000 * 60 * 60 * 24)));
let weeksPerMonth = 52 / 12;

let oliverAgeYears = 0;
let oliverAgeMonths = 0;
let oliverAgeWeeks = 0;
let oliverAgeDays = 0;

let oliverAgeWeeksDecrementing = oliverAgeDayCount / 7;


if (oliverAgeWeeksDecrementing >= 52) {
    let oliverYears = Math.floor(oliverAgeWeeksDecrementing / 52);
    oliverAgeYears = oliverYears;
    oliverAgeWeeksDecrementing -= oliverYears * 52;
} if (oliverAgeWeeksDecrementing < 52 && oliverAgeWeeksDecrementing >= weeksPerMonth) {
    let oliverMonths = Math.floor(oliverAgeWeeksDecrementing / weeksPerMonth);
    oliverAgeMonths = oliverMonths;
    oliverAgeWeeksDecrementing -= oliverMonths * weeksPerMonth;
} if (oliverAgeWeeksDecrementing <= weeksPerMonth && oliverAgeWeeksDecrementing >= 1) {
    oliverAgeWeeks = Math.floor(oliverAgeWeeksDecrementing);
    oliverAgeWeeksDecrementing -= oliverAgeWeeks;
} if (oliverAgeWeeksDecrementing < 1) {
    oliverAgeDays = Math.round(oliverAgeWeeksDecrementing * 7);
    oliverAgeWeeksDecrementing = 0;
}

document.getElementById("oliverAgeSpan").innerText = oliverAgeYears + " Years, " + oliverAgeMonths + " Months, " + oliverAgeWeeks + " Weeks, " + oliverAgeDays + " Days";