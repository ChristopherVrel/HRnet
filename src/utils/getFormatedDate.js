const getFormatedDate = (date) => {
    let fDate = new Date(date);
    let y = fDate.getFullYear();
    let m = fDate.getMonth() + 1;
    let d = fDate.getDate();

    return `${y}-${(m < 10) ? `0${m}` : m}-${(d < 10) ? `0${d}` : d}`;
}

export default getFormatedDate;