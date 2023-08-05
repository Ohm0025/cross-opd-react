function DrugSubItem({ diag, list }) {
  const list_filter = list.filter((item1) => item1[3] === diag);

  return list_filter.map((item2, index) => {
    return (
      <li key={index + "subItem"}>
        {item2[0] +
          (item2[1] ? `(${item2[1]}) ` : " ") +
          item2[2] +
          (item2[4] ? ` # ${item2[4]}` : "")}
      </li>
    );
  });
}

export default DrugSubItem;
