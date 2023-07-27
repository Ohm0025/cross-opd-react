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
