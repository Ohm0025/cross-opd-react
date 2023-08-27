import { usePastHx } from "../../../contexts/PastContext";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./PastNav.css";

function PastNav() {
  const { listAllPast } = usePastHx();

  return (
    <div className="ph-navBar">
      {listAllPast.map((item, index) => {
        return (
          <div
            className="ph-nav-item"
            key={"ph-navbar" + index}
            onClick={() => console.log(item.id)}
          >
            {formatCreatedAt(item.updatedAt)}
          </div>
        );
      })}
      <div className="ph-nav-item">{"10/10/66"}</div>
      <div className="ph-nav-item">{"20/20/66"}</div>
    </div>
  );
}

export default PastNav;
