import "./PtWaitPage.css";
import { useAuth } from "../../../../contexts/AuthContext";
import { useHomePt } from "../../../../contexts/HomePtContext";

function PtWaitPage() {
  const { user } = useAuth();
  const { waitCase } = useHomePt();
  return (
    <div className="pt-waitpage">
      <div className="pt-show-id">
        <div>{"เปิดบัตรสำเร็จ"}</div>
        <div>{`ID : ${user.id}`}</div>
      </div>
      <div className="pt-show-status">{`status : ${waitCase.status}`}</div>
    </div>
  );
}

export default PtWaitPage;
