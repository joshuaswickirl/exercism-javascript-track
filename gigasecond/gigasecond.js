// Determines the given time plus a gigasecond
const one_gigasecond = Math.pow(10,12);
export const gigasecond = date => new Date(date.getTime() + one_gigasecond);
