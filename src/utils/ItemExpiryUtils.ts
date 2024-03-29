export const calculateTimeLeft = (endTime: string) => {
  const now = new Date().getTime();
  const endDateTime = new Date(endTime).getTime();
  const timeLeft = endDateTime - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export function isEndDateReached(currentEndDate: string) {
  // Convert the input end date to a Date object
  const endDateTime = new Date(currentEndDate);

  // Get the current date
  const currentDate = new Date();

  // Extract the year, month, and day from both dates
  const endYear = endDateTime.getUTCFullYear();
  const endMonth = endDateTime.getUTCMonth();
  const endDay = endDateTime.getUTCDate();

  const currentYear = currentDate.getUTCFullYear();
  const currentMonth = currentDate.getUTCMonth();
  const currentDay = currentDate.getUTCDate();
  const currentEndDateReached =
    currentYear > endYear ||
    (currentYear === endYear && currentMonth > endMonth) ||
    (currentYear === endYear &&
      currentMonth === endMonth &&
      currentDay >= endDay);
  // Compare the year, month, and day
  return currentEndDateReached;
}
