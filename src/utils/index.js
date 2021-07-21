import TodoContainer from "../containers/TodoContainer";

export const getDay = (timestamp) => {
    let date = new Date(timestamp).getDate();
    let ordinal = date === 1 ? 'st' : date === 2 ? 'nd' : date > 2 ? 'th' : 'th';
    return `${date}${ordinal}`
}

const monthsNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export const getMonth = timestamp => {
    let monthNumber = new Date(timestamp).getMonth();
    return `${monthsNames[monthNumber]}`
}

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getActiveTodoDates = (timestamp) => {
    let dayNumber = new Date(timestamp).getDay();
    let todayDayNumber = new Date().getDay()
    let day = dayNumber === todayDayNumber ? 'Today' : 
    dayNumber === todayDayNumber - 1 ? 'Yesterday' : 
    dayNumber < todayDayNumber - 1 ? dayNames[dayNumber] : null;
    let hours = new Date(timestamp).getHours();
    let minutes = new Date(timestamp).getMinutes();
    let  ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let time = `${hours}:${minutes} ${ampm}`;
    return `${day} at ${time}`
}

export const getdateColor = (timestamp) => {
    let dayNumber = new Date(timestamp).getDay();
    let todayDayNumber = new Date().getDay();
    return dayNumber === todayDayNumber ? "green" : 
            dayNumber === todayDayNumber - 1 ? "yellow": 
                dayNumber < todayDayNumber - 1 ? "red" : "red"
}