const waiting = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

export default waiting;