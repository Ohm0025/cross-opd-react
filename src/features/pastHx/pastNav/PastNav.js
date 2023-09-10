import { usePastHx } from "../../../contexts/PastContext";
import { formatCreatedAt } from "../../../utility/formatDataTime";
import "./PastNav.css";

function PastNav() {
  const { listAllPast, changeSelectedCase } = usePastHx();

  return (
    <div className="ph-navBar">
      {listAllPast?.map((item, index) => {
        return (
          <div
            className="ph-nav-item"
            key={"ph-navbar" + index}
            onClick={() => changeSelectedCase(item.id)}>
            {formatCreatedAt(item.updatedAt)}
          </div>
        );
      })}
    </div>
  );
}

export default PastNav;
