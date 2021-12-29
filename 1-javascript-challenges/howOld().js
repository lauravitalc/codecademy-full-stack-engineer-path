const howOld = (age, year) => {
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}
console.log(howOld(21,1999));
console.log(howOld(21,2021));
console.log(howOld(21,2024));