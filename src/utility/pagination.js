export const paginateIndex = (amount, numberPage) => {
  const orderIndex = {};
  orderIndex["startIndex"] = 1 + amount * (numberPage - 1) - 1;
  orderIndex["endIndex"] = amount * numberPage;
  return orderIndex;
};
