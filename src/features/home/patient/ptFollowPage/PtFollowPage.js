import "./PtFollowPage.css";

function PtFollowPage() {
  const listFu = [
    {
      fuHos: "lansak hospital",
      fuOPD: "HT clinic",
      fuDetail: "ejfoefjoe",
      fuDate: "12/09/2556",
    },
  ];
  return (
    <div className="pt-fu-container">
      {listFu.length > 0 ? (
        <div>
          {listFu.map((item, index) => {
            return (
              <div className="pt-fu-item">
                <small>{item.fuDate}</small>
                <div className="pt-fu-subItem">
                  <span>{item.fuHos}</span>
                  <span>{item.fuOPD}</span>
                </div>
                <div className="pt-fu-detail">
                  {"Detail : " + item.fuDetail}
                </div>
                <div className="pt-fu-action">
                  <button>Activate</button>
                  <button>Cancel</button>
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
