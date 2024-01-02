const currentdate = document.querySelector(".current-date")
const daysTag = document.querySelector(".days")
const preNextIcons = document.querySelectorAll('.icons span')

let date = new Date();
curryear = date.getFullYear();
currmonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const renderCalender = () => {
    let firstDateOfMonth = new Date(curryear, currmonth, 1).getDay();
    let lastDateOfMonth = new Date(curryear, currmonth + 1, 0).getDate();
    let lastDateOfLastMonth = new Date(curryear, currmonth, 0).getDate();
    let lastDayOfMonth = new Date(curryear, currmonth, lastDateOfMonth).getDay();
    let liTag = "";

    for (let i = firstDateOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currmonth === new Date().getMonth() && curryear === new Date().getFullYear() ? "active" : ""
        liTag += `<li class="${isToday}">${i}</li>`
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }

    currentdate.innerText = `${months[currmonth]}, ${curryear}`;
    daysTag.innerHTML = liTag
}
renderCalender();

preNextIcons.forEach(icon => { //adding click event both icon
    icon.addEventListener("click", () => {
        //if clicked icon previous icon the decrement current month else increment
        currmonth = icon.id === "prev" ? currmonth - 1 : currmonth + 1;

        if (currmonth < 0 || currmonth > 11) {
            date = new Date(curryear, currmonth);
            curryear = date.getFullYear();
            currmonth = date.getMonth();
        }
        else {
            date = new Date();
        }
        renderCalender();
    });
});