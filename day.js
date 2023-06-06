const dayName = (date) => {
  const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfTheWeek[date.getDay()];
};

const greeting = (date) => {
  return `Hello, world! Happy ${dayName(date)}`;
};
