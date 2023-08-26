export const formatDateTime = (time) =>
  ("" + time).length === 2 ? time : "0" + time;

export const formatCreatedAt = (dateInput) => {
  const date = new Date(dateInput);
  const date_member =
    formatDateTime(date.getDate()) +
    "/" +
    formatDateTime(date.getMonth() + 1) +
    "/" +
    formatDateTime(date.getFullYear()).slice(1);
  return date_member;
};

export const diffDate = (dateStart, dateEnd) => {
  const diffTime = dateEnd.getTime() - dateStart.getTime();
  return diffTime / (1000 * 3600 * 24);
};

export const caldiffDate = (date1, date2) => {
  const diffInTime = Math.abs(date1.getTime() - date2.getTime());
  return Math.ceil(diffInTime / (1000 * 3600 * 24));
};
