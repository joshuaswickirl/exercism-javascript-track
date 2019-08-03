// Determines the given time plus a gigasecond
export const gigasecond = date => new Date(date.getTime() + Math.pow(10,12));
