import "./ImgHxPage.css";
import ImgHxContextProvider from "../../contexts/ImgHxContext";
import ImgHxNav from "../../features/imgHx/imgHxNav/ImgHxNav";
import ImgHxCenter from "../../features/imgHx/imgHxCenter/ImgHxCenter";

function ImgHxPage() {
  return (
    <ImgHxContextProvider>
      <div className="ih-page">
        <ImgHxNav />
        <ImgHxCenter />
      </div>
    </ImgHxContextProvider>
  );
}

export default ImgHxPage;
