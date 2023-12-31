import "./PtFollowPage.css";
import { useFollowUp } from "../../../../contexts/FollowUpContext";
import {
  caldiffDate,
  formatCreatedAt,
} from "../../../../utility/formatDataTime";
import { toast } from "react-toastify";
import { useLoading } from "../../../../contexts/LoadingContext";

function PtFollowPage() {
  const { listFu, activateFollowUp, cancelFollowUp } = useFollowUp();
  const { startLoading, stopLoading } = useLoading();

  return (
    <div className="pt-fu-container">
      {listFu.length > 0 ? (
        <div>
          {listFu.map((item, index) => {
            return (
              <div className="pt-fu-item" key={"pt-fu-item" + index}>
                <div className="pt-fu-item-date">
                  <small>{formatCreatedAt(item.FollowUp.fuDate)}</small>
                  <small>
                    {caldiffDate(new Date(), new Date(item.FollowUp.fuDate))
                      ? `เหลืออีก ${caldiffDate(
                          new Date(),
                          new Date(item.FollowUp.fuDate)
                        )}`
                      : `${"วันนี้"}`}
                  </small>
                </div>

                <div className="pt-fu-subItem">
                  <span>{item.FollowUp.fuHos}</span>
                  <span>{item.FollowUp.fuOPD}</span>
                </div>
                <div className="pt-fu-detail">
                  {"Detail : " + item.FollowUp.fuDetail}
                </div>
                <div className="pt-fu-action">
                  {caldiffDate(new Date(), new Date(item.FollowUp.fuDate)) ? (
                    <>
                      <button disabled className="unable-button">
                        Activate
                      </button>
                      <button
                        onClick={() => cancelFollowUp(item?.FollowUp?.id)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={async () => {
                          try {
                            startLoading();
                            await activateFollowUp(item?.FollowUp?.id);
                            window.location.reload();
                          } catch (err) {
                            toast.error(err);
                          } finally {
                            stopLoading();
                          }
                        }}>
                        Activate
                      </button>
                      <button
                        onClick={() => cancelFollowUp(item?.FollowUp?.id)}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="pt-fu-empty">No FollowUp</div>
      )}
    </div>
  );
}
export default PtFollowPage;
