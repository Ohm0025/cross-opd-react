function DrugSubItem({ list }) {
  return list.map((item2, index) => {
    return item2[1].map((item3, index2) => {
      return (
        <li key={"drugSubItem" + index + " " + index2}>
          {item3.title} {item3.detail}
        </li>
      );
    });
  });
}

export default DrugSubItem;
