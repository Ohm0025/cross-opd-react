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

  if (date_member.includes("NaN")) {
    return;
  }

  return date_member;
};

export const diffDate = (dateStart, dateEnd) => {
  const diffTime = dateEnd.getTime() - dateStart.getTime();
  return diffTime / (1000 * 3600 * 24);
};

export const caldiffDate = (date1, date2) => {
  // console.log(date1.getTime());
  // const diffInTime = Math.abs(Math.ceildate1.getTime() - date2.getTime());
  // return Math.floor(diffInTime / (1000 * 3600 * 24));
  const diffInTime =
    date2.getTime() / (1000 * 3600 * 24) - date1.getTime() / (1000 * 3600 * 24);

  return Math.ceil(diffInTime);
};
